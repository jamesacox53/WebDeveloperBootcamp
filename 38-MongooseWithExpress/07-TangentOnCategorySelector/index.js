const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

const Product = require('./models/product.js');
const categoryArr = ['Fruit', 'Vegetable', 'Dairy'];

app.get('/products', async (req, res) => {
    const productArr = await Product.find({});
    
    const optionsObj = {
        productArr: productArr
    };

    res.render('products/index.ejs', optionsObj);
});

app.get('/products/new', (req, res) => {
    const optionsObj = {
        categoryArr: categoryArr
    };

    res.render('products/new.ejs', optionsObj);
});

app.post('/products', async (req, res) => {
    const newProductObj = new Product(req.body);
    await newProductObj.save();

    res.redirect(`/products/${newProductObj._id}`);
});

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const productObj = await Product.findById(id);
    
    const optionsObj = {
        productObj: productObj
    };

    res.render('products/show.ejs', optionsObj);
});

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const productObj = await Product.findById(id);
    
    const optionsObj = {
        productObj: productObj,
        categoryArr: categoryArr
    };

    res.render('products/edit.ejs', optionsObj);
});

app.put('/products/:id/', async (req, res) => {
    const { id } = req.params;
    const optionsObj = { runValidators: true, new: true  };
    
    const productObj = await Product.findByIdAndUpdate(id, req.body, optionsObj);

    res.redirect(`/products/${productObj._id}`);
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