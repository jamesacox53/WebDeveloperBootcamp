const Campground = require('../models/campground');
const { cloudinary } = require('../cloudinary');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');

const mapBoxToken = process.env.MAPBOX_TOKEN;
const geoCoder = mbxGeocoding({ accessToken: mapBoxToken });


module.exports.index = async (req, res) => {
    const campgroundArr = await Campground.find({});

    const campMapObj = {
        features: []
    };

    for (let campgroundObj of campgroundArr) {
        const campObj = {
            title: campgroundObj['title'],
            geometry: campgroundObj['geometry'],
            location: campgroundObj['location']
        };

        campMapObj.features.push(campObj);
    }

    const optionsObj = {
        campgroundArr: campgroundArr,
        campMapObj: campMapObj
    };

    res.render('campgrounds/index', optionsObj);
};

module.exports.renderNewForm = (req, res) => {
    res.render('campgrounds/new');
};

module.exports.createCampground = async (req, res, next) => {
    const geoData = await geoCoder.forwardGeocode({
        query: req.body.campground.location,
        limit: 1
    }).send();

    const authorId = req.user._id;
    const geometryObj = geoData.body.features[0].geometry;
    const imgArr = req.files.map(f => ({url: f.path, filename: f.filename}));
    
    const campground = new Campground(req.body.campground);
    campground.author = authorId;
    campground.geometry = geometryObj;
    campground.images = imgArr;
    await campground.save();

    console.log(campground);

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
    const imgArr = req.files.map(f => ({url: f.path, filename: f.filename}));
    campground.images.push(...imgArr);

    await campground.save();

    if (req.body.deleteImages) {
        for (let filenameStr of req.body.deleteImages) {
            await cloudinary.uploader.destroy(filenameStr);
        }

        await campground.updateOne({ $pull: { images: { filename: { $in: req.body.deleteImages }}}});
    }

    console.log(campground);

    req.flash('success', 'Successfully updated campground!');
    res.redirect(`/campgrounds/${campground._id}`);
};

module.exports.deleteCampground = async (req, res) => {
    const idStr = req.params.id;

    await Campground.findByIdAndDelete(idStr);

    req.flash('success', 'Successfully deleted a campground!');
    res.redirect('/campgrounds');
};