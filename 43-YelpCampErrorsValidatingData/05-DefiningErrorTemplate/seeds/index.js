const mongoose = require('mongoose');

const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

const Campground = require('../models/campground');

createCampgrounds();

async function createCampgrounds() {
    try {
        await mongoose.connect('mongodb://localhost:27017/yelp-camp');

        await seedDB();

        await mongoose.connection.close();
    
    } catch(err) {
        console.log(err);
    }
}

async function seedDB() {
    await Campground.deleteMany({});
    
    for (let i = 1; i <= 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const priceInt = Math.floor(Math.random() * 20) + 10;
        
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${getSampleElem(descriptors)} ${getSampleElem(places)}`,
            image: `https://picsum.photos/400?random=${Math.random()}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus nobis nemo pariatur veniam aliquam iste molestias at reprehenderit expedita, ad aliquid amet minus? Ducimus dicta accusamus quidem voluptates odit.',
            price: priceInt
        });

        await camp.save();
    }
}

function getSampleElem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}