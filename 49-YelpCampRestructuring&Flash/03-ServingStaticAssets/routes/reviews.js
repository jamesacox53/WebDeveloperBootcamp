const express = require('express');
const router = express.Router({ mergeParams: true });

const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const { reviewSchema } = require('../schemas');

const Campground = require('../models/campground');
const Review = require('../models/review');

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);

    if (error) {
        const message = error.details.map(el => el.message).join(', ');
        throw new ExpressError(message, 400);
    
    } else {
        next();
    }
};

router.post('/', validateReview, catchAsync(async (req, res) => {
    const { review } = req.body;
    const { id } = req.params;

    const reviewObj = new Review(review);
    const campgroundObj = await Campground.findById(id);

    campgroundObj.reviews.push(reviewObj);

    await reviewObj.save();
    await campgroundObj.save();

    res.redirect(`/campgrounds/${campgroundObj._id}`);
}));

router.delete('/:reviewId', catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId }});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/campgrounds/${id}`);
}));

module.exports = router;