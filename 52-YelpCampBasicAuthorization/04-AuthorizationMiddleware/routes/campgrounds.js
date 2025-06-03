const express = require('express');
const router = express.Router();

const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, validateCampground, isAuthor } = require('../middleware');

const Campground = require('../models/campground');

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

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(async (req, res) => {
    const idStr = req.params.id;
    const campgroundObj = await Campground.findById(idStr);

    const optionsObj = {
        campgroundObj: campgroundObj
    };

    res.render('campgrounds/edit', optionsObj);
}));

router.put('/:id', isLoggedIn, isAuthor, validateCampground, catchAsync(async (req, res) => {
    const idStr = req.params.id;
    const campgroundObj = { ...req.body.campground };

    const newCampgroundObj = await Campground.findByIdAndUpdate(idStr, campgroundObj);

    req.flash('success', 'Successfully updated campground!');
    res.redirect(`/campgrounds/${newCampgroundObj._id}`);
}));

router.delete('/:id', isLoggedIn, isAuthor, catchAsync(async (req, res) => {
    const idStr = req.params.id;

    await Campground.findByIdAndDelete(idStr);

    req.flash('success', 'Successfully deleted a campground!');
    res.redirect('/campgrounds');
}));

module.exports = router;