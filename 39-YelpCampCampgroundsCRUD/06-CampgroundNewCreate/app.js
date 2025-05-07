const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

const Campground = require('./models/campground');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/campgrounds', async (req, res) => {
    const campgroundArr = await Campground.find({});

    const optionsObj = {
        campgroundArr: campgroundArr
    };
    
    res.render('campgrounds/index', optionsObj);
});

app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new');
});

app.get('/campgrounds/:id', async (req, res) => {
    const idStr = req.params.id;
    const campgroundObj = await Campground.findById(idStr);

    const optionsObj = {
        campgroundObj: campgroundObj
    };
    
    res.render('campgrounds/show', optionsObj);
});

app.post('/campgrounds', async (req, res) => {
    const campgroundObj = new Campground(req.body.campground);
    await campgroundObj.save();
    
    res.redirect(`/campgrounds/${campgroundObj._id}`);
});

app.listen(3000, async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/yelp-camp');
        
        console.log("Serving on port 3000");
    
    } catch(err) {
        console.log(err);
    }
});