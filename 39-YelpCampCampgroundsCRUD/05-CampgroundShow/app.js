const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

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

app.get('/campgrounds/:id', async (req, res) => {
    const idStr = req.params.id;
    const campgroundObj = await Campground.findById(idStr);

    const optionsObj = {
        campgroundObj: campgroundObj
    };
    
    res.render('campgrounds/show', optionsObj);
});

app.listen(3000, async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/yelp-camp');
        
        console.log("Serving on port 3000");
    
    } catch(err) {
        console.log(err);
    }
});