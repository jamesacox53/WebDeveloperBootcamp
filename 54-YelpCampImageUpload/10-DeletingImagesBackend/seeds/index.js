const mongoose = require('mongoose');

const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

const Campground = require('../models/campground');
const User = require('../models/user');

createCampgrounds();

async function createCampgrounds() {
    try {
        await mongoose.connect('mongodb://localhost:27017/yelp-camp');

        await seedDB();

        await mongoose.connection.close();

    } catch (err) {
        console.log(err);
    }
}

async function seedDB() {
    await Campground.deleteMany({});

    for (let i = 1; i <= 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const priceInt = Math.floor(Math.random() * 20) + 10;

        const camp = new Campground({
            author: '683ffa44e7711ab4a4b70df2',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${getSampleElem(descriptors)} ${getSampleElem(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus nobis nemo pariatur veniam aliquam iste molestias at reprehenderit expedita, ad aliquid amet minus? Ducimus dicta accusamus quidem voluptates odit.',
            price: priceInt,
            images: [
                {
                    url: 'https://res.cloudinary.com/dcj6l3ibf/image/upload/v1749465157/YelpCamp/ynh4wluf3c0odbxt9mds.jpg',
                    filename: 'YelpCamp/ynh4wluf3c0odbxt9mds'
                },
                {
                    url: 'https://res.cloudinary.com/dcj6l3ibf/image/upload/v1749465157/YelpCamp/tlnl97sabufwqymdoc1a.jpg',
                    filename: 'YelpCamp/tlnl97sabufwqymdoc1a'
                }
            ],
        });

        await camp.save();
    }
}

function getSampleElem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}