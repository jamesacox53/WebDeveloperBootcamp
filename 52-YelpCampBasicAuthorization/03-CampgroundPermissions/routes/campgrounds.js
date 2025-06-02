const express = require('express');
const router = express.Router();

const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const { isLoggedIn } = require('../middleware');
const { campgroundSchema } = require('../schemas');

const Campground = require('../models/campground');


const validateCampground = (req, res, next) => {
    const { error } = campgroundSchema.validate(req.body);

    if (error) {
        const message = error.details.map(el => el.message).join(', ');
        throw new ExpressError(message, 400);
    
    } else {
        next();
    }
};

router.get('/', catchAsync(async (req, res) => {
    const campgroundArr = await Campground.find({});

    const optionsObj = {
        campgroundArr: campgroundArr
    };

    res.render('campgrounds/index', optionsObj);
}));

router.get('/new', isLoggedIn, (req, res) => {
    res.render('campgrounds/new');
});

router.post('/', isLoggedIn, validateCampground, catchAsync(async (req, res, next) => {
    const campgroundObj = new Campground(req.body.campground);
    campgroundObj.author = req.user._id;
    await campgroundObj.save();

    req.flash('success', 'Successfully made a new campground!');

    res.redirect(`/campgrounds/${campgroundObj._id}`);
}));

router.get('/:id', catchAsync(async (req, res) => {
    const idStr = req.params.id;
    const campgroundObj = await Campground.findById(idStr).populate('reviews').populate('author');

    if (!campgroundObj) {
        req.flash('error', 'Cannot find campground!');  
        return res.redirect('/campgrounds');
    }

    const optionsObj = {
        campgroundObj: campgroundObj
    };

    res.render('campgrounds/show', optionsObj);
}));

router.get('/:id/edit', isLoggedIn, catchAsync(async (req, res) => {
    const idStr = req.params.id;
    const campgroundObj = await Campground.findById(idStr);

    if (!campgroundObj) {
        req.flash('error', 'Cannot find campground!');
        return res.redirect('/campgrounds');
    }

    const optionsObj = {
        campgroundObj: campgroundObj
    };

    res.render('campgrounds/edit', optionsObj);
}));

router.put('/:id', isLoggedIn, validateCampground, catchAsync(async (req, res) => {
    const idStr = req.params.id;
    const campgroundObj = { ...req.body.campground };

    const campground = await Campground.findById(idStr);
    if (!campground.author.equals(req.user._id)) {
        req.flash('error', "You don't have permission to do that!");
        return res.redirect(`/campgrounds/${idStr}`);
    }

    const newCampgroundObj = await Campground.findByIdAndUpdate(idStr, campgroundObj);

    req.flash('success', 'Successfully updated campground!');

    res.redirect(`/campgrounds/${newCampgroundObj._id}`);
}));

router.delete('/:id', isLoggedIn, catchAsync(async (req, res) => {
    const idStr = req.params.id;

    await Campground.findByIdAndDelete(idStr);

    req.flash('success', 'Successfully deleted a campground!');

    res.redirect('/campgrounds');
}));

module.exports = router;