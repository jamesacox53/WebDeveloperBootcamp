const Campground = require('../models/campground');
const Review = require('../models/review');

module.exports.createReview = async (req, res) => {
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
};

module.exports.deleteReview = async (req, res) => {
    const { id, reviewId } = req.params;
    
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId }});
    await Review.findByIdAndDelete(reviewId);

    req.flash('success', 'Successfully deleted a review!');

    res.redirect(`/campgrounds/${id}`);
};