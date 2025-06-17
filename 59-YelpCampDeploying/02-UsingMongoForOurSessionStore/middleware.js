const { campgroundSchema, reviewSchema } = require('./schemas');
const ExpressError = require('./utils/ExpressError');

const Campground = require('./models/campground');
const Review = require('./models/review');

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl;
        req.flash('error', 'You must be signed in');       
        return res.redirect('/login');
    }
    
    return next();
};

module.exports.storeReturnTo = (req, res, next) => {
    if (req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
    }
    
    next();
};

module.exports.validateCampground = (req, res, next) => {
    const { error } = campgroundSchema.validate(req.body);

    if (error) {
        const message = error.details.map(el => el.message).join(', ');
        throw new ExpressError(message, 400);
    
    } else {
        next();
    }
};

module.exports.isAuthor = async(req, res, next) => {
    const idStr = req.params.id;
    const campgroundObj = await Campground.findById(idStr);

    if (!campgroundObj) {
        req.flash('error', 'Cannot find campground!');  
        return res.redirect('/campgrounds');
    }
    
    if (!campgroundObj.author.equals(req.user._id)) {
        req.flash('error', "You don't have permission to do that!");
        return res.redirect(`/campgrounds/${idStr}`);
    }

    return next();
};

module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);

    if (error) {
        const message = error.details.map(el => el.message).join(', ');
        throw new ExpressError(message, 400);
    
    } else {
        next();
    }
};

module.exports.isReviewAuthor = async(req, res, next) => {
    const idStr = req.params.id;
    const reviewId = req.params.reviewId;
    const review = await Review.findById(reviewId);

    if (!review) {
        req.flash('error', 'Cannot find review!');  
        return res.redirect('/campgrounds');
    }
    
    if (!review.author.equals(req.user._id)) {
        req.flash('error', "You don't have permission to do that!");
        return res.redirect(`/campgrounds/${idStr}`);
    }

    return next();
};