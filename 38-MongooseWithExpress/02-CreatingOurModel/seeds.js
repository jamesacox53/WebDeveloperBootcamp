const mongoose = require('mongoose');

const Product = require('./models/product.js');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');

    const productsArr = [
        {
            name: 'Ruby Grapefruit',
            price: 1.99,
            category: 'Fruit'
        },
        {
            name: 'Fairy Eggplant',
            price: 1.00,
            category: 'Vegetable'
        },
        {
            name: 'Organic Goddess Melon',
            price: 4.99,
            category: 'Fruit'
        },
        {
            name: 'Organic Mini Seedless Watermelon',
            price: 3.99,
            category: 'Fruit'
        },
        {
            name: 'Organic Celery',
            price: 1.50,
            category: 'Vegetable'
        },
        {
            name: 'Chocolate Whole Milk',
            price: 2.69,
            category: 'Dairy'
        }
    ];

    try {
        const p = await Product.insertMany(productsArr);
        
        console.log(p);

    } catch(err) {
        console.log(err);
    }
}