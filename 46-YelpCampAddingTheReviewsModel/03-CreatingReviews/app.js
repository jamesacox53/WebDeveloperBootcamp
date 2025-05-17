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
const { campgroundSchema } = require('./schemas');

const Campground = require('./models/campground');
const Review = require('./models/review');

const validateCampground = (req, res, next) => {
    const { error } = campgroundSchema.validate(req.body);

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

app.get('/campgrounds', catchAsync(async (req, res) => {
    const campgroundArr = await Campground.find({});

    const optionsObj = {
        campgroundArr: campgroundArr
    };

    res.render('campgrounds/index', optionsObj);
}));

app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new');
});

app.post('/campgrounds', validateCampground, catchAsync(async (req, res, next) => {
    const campgroundObj = new Campground(req.body.campground);
    await campgroundObj.save();

    res.redirect(`/campgrounds/${campgroundObj._id}`);
}));

app.get('/campgrounds/:id', catchAsync(async (req, res) => {
    const idStr = req.params.id;
    const campgroundObj = await Campground.findById(idStr);

    const optionsObj = {
        campgroundObj: campgroundObj
    };

    res.render('campgrounds/show', optionsObj);
}));

app.get('/campgrounds/:id/edit', catchAsync(async (req, res) => {
    const idStr = req.params.id;
    const campgroundObj = await Campground.findById(idStr);

    const optionsObj = {
        campgroundObj: campgroundObj
    };

    res.render('campgrounds/edit', optionsObj);
}));

app.put('/campgrounds/:id', validateCampground, catchAsync(async (req, res) => {
    const idStr = req.params.id;
    const campgroundObj = { ...req.body.campground };

    const newCampgroundObj = await Campground.findByIdAndUpdate(idStr, campgroundObj);

    res.redirect(`/campgrounds/${newCampgroundObj._id}`);
}));

app.delete('/campgrounds/:id', catchAsync(async (req, res) => {
    const idStr = req.params.id;

    await Campground.findByIdAndDelete(idStr);

    res.redirect('/campgrounds');
}));

app.post('/campgrounds/:id/reviews', catchAsync(async (req, res) => {
    const { review } = req.body;
    const { id } = req.params;

    const reviewObj = new Review(review);
    const campgroundObj = await Campground.findById(id);

    campgroundObj.reviews.push(reviewObj);

    await reviewObj.save();
    await campgroundObj.save();

    res.redirect(`/campgrounds/${campgroundObj._id}`);
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