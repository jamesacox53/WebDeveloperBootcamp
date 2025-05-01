const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const Product = require('./models/product.js');

app.get('/products', async (req, res) => {
    const productArr = await Product.find({});
    
    const optionsObj = {
        productArr: productArr
    };

    res.render('products/index.ejs', optionsObj);
});

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    
    const productObj = await Product.findById(id);
    
    const optionsObj = {
        productObj: productObj
    };

    res.render('products/show.ejs', optionsObj);
});

app.listen(3000, async () => {
    try {
        await main();
    
    } catch(err) {
        console.log(err);
    }
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');
}