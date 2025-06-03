const express = require('express');
const router = express.Router({ mergeParams: true });

const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, validateReview } = require('../middleware');

const Campground = require('../models/campground');
const Review = require('../models/review');

router.post('/', isLoggedIn, validateReview, catchAsync(async (req, res) => {
    const { review } = req.body;
    const { id } = req.params;

    const reviewObj = new Review(review);
    const campgroundObj = await Campground.findById(id);

    reviewObj.author = req.user._id;
    campgroundObj.reviews.push(reviewObj);
    
    await reviewObj.save();
    await campgroundObj.save();

    req.flash('success', 'Successfully created new review!');

    res.redirect(`/campgrounds/${campgroundObj._id}`);
}));

router.delete('/:reviewId', catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId }});
    await Review.findByIdAndDelete(reviewId);

    req.flash('success', 'Successfully deleted a review!');

    res.redirect(`/campgrounds/${id}`);
}));

module.exports = router;