const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');

const app = express();
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const catchAsync = require('./utils/catchAsync');
const ExpressError = require('./utils/ExpressError');
const { campgroundSchema, reviewSchema } = require('./schemas');

const Campground = require('./models/campground');
const Review = require('./models/review');

const campgrounds = require('./routes/campgrounds');

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);

    if (error) {
        const message = error.details.map(el => el.message).join(', ');
        throw new ExpressError(message, 400);
    
    } else {
        next();
    }
};

app.get('/', (req, res) => {
    res.render('home');
});

app.use('/campgrounds', campgrounds);

app.post('/campgrounds/:id/reviews', validateReview, catchAsync(async (req, res) => {
    const { review } = req.body;
    const { id } = req.params;

    const reviewObj = new Review(review);
    const campgroundObj = await Campground.findById(id);

    campgroundObj.reviews.push(reviewObj);

    await reviewObj.save();
    await campgroundObj.save();

    res.redirect(`/campgrounds/${campgroundObj._id}`);
}));

app.delete('/campgrounds/:id/reviews/:reviewId', catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId }});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/campgrounds/${id}`);
}));

app.all(/(.*)/, (req, res, next) => {
    const err = new ExpressError('Page Not Found', 404);

    next(err);
});

app.use((err, req, res, next) => {
    if (!err.statusCode)
        err.statusCode = 500;

    if (!err.message)
        err.message = 'Something went wrong';

    res.status(err.statusCode).render('error', { err });
});


app.listen(3000, async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/yelp-camp');

        console.log("Serving on port 3000");

    } catch (err) {
        console.log(err);
    }
});