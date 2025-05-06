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

app.get('/makecampground', async (req, res) => {
    const camp = new Campground({
        title: 'My backyard',
        description: 'Cheap camping!'
    });

    await camp.save();

    res.send(camp);
});


app.listen(3000, async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/yelp-camp');
        
        console.log("Serving on port 3000");
    
    } catch(err) {
        console.log(err);
    }
});