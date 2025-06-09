const Campground = require('../models/campground');

module.exports.index = async (req, res) => {
    const campgroundArr = await Campground.find({});

    const optionsObj = {
        campgroundArr: campgroundArr
    };

    res.render('campgrounds/index', optionsObj);
};

module.exports.renderNewForm = (req, res) => {
    res.render('campgrounds/new');
};

module.exports.createCampground = async (req, res, next) => {
    const imgArr = req.files.map(f => ({url: f.path, filename: f.filename}));
    
    const campground = new Campground(req.body.campground);
    campground.author = req.user._id;
    campground.images = imgArr;
    await campground.save();

    req.flash('success', 'Successfully made a new campground!');
    res.redirect(`/campgrounds/${campground._id}`);
};

module.exports.showCampground = async (req, res) => {
    const idStr = req.params.id;

    const reviewObj = {
        path: 'reviews',
        populate: {
            path: 'author'
        }
    };

    const campground = await Campground.findById(idStr).populate(reviewObj).populate('author');

    if (!campground) {
        req.flash('error', 'Cannot find campground!');
        return res.redirect('/campgrounds');
    }

    const optionsObj = {
        campgroundObj: campground
    };

    res.render('campgrounds/show', optionsObj);
};

module.exports.renderEditForm = async (req, res) => {
    const idStr = req.params.id;
    const campground = await Campground.findById(idStr);

    const optionsObj = {
        campgroundObj: campground
    };

    res.render('campgrounds/edit', optionsObj);
};

module.exports.updateCampground = async (req, res) => {
    const idStr = req.params.id;
    const campgroundObj = { ...req.body.campground };

    const campground = await Campground.findByIdAndUpdate(idStr, campgroundObj);

    req.flash('success', 'Successfully updated campground!');
    res.redirect(`/campgrounds/${campground._id}`);
};

module.exports.deleteCampground = async (req, res) => {
    const idStr = req.params.id;

    await Campground.findByIdAndDelete(idStr);

    req.flash('success', 'Successfully deleted a campground!');
    res.redirect('/campgrounds');
};