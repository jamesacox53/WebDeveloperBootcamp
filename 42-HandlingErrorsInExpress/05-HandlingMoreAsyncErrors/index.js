const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

const AppError = require('./AppError');

const Product = require('./models/product.js');
const categoryArr = ['Fruit', 'Vegetable', 'Dairy'];

app.get('/products', async (req, res, next) => {
    try {
        const categoryStr = req.query.category;

        if (categoryStr) {
            const productArr = await Product.find({ category: categoryStr });

            const optionsObj = {
                productArr: productArr,
                categoryStr: categoryStr
            };

            res.render('products/index.ejs', optionsObj);

        } else {
            const productArr = await Product.find({});

            const optionsObj = {
                productArr: productArr,
                categoryStr: 'All'
            };

            res.render('products/index.ejs', optionsObj);
        }
    } catch (err) {
        next(err);
    }
});

app.get('/products/new', (req, res) => {
    const optionsObj = {
        categoryArr: categoryArr
    };

    res.render('products/new.ejs', optionsObj);
});

app.post('/products', async (req, res, next) => {
    try {
        const newProductObj = new Product(req.body);
        await newProductObj.save();

        res.redirect(`/products/${newProductObj._id}`);

    } catch (err) {
        next(err);
    }
});

app.get('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const productObj = await Product.findById(id);

        if (!productObj)
            throw new AppError('Product not found', 404);

        const optionsObj = {
            productObj: productObj
        };

        res.render('products/show.ejs', optionsObj);
    } catch (err) {
        next(err);
    }
});

app.get('/products/:id/edit', async (req, res, next) => {
    try {
        const { id } = req.params;
        const productObj = await Product.findById(id);

        if (!productObj)
            throw new AppError('Product not found', 404);

        const optionsObj = {
            productObj: productObj,
            categoryArr: categoryArr
        };

        res.render('products/edit.ejs', optionsObj);
    
    } catch (err) {
        next(err);
    }
});

app.put('/products/:id/', async (req, res, next) => {
    try {
        const { id } = req.params;
        const optionsObj = { runValidators: true, new: true };

        const productObj = await Product.findByIdAndUpdate(id, req.body, optionsObj);

        res.redirect(`/products/${productObj._id}`);

    } catch (err) {
        next(err);
    }
});

app.delete('/products/:id/', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);

    res.redirect('/products');
});

app.use((err, req, res, next) => {
    const statusInt = err.status;
    const messageStr = err.message;

    if (statusInt) {
        res.status(statusInt);

    } else {
        res.status(500);
    }

    if (messageStr) {
        res.send(messageStr);

    } else {
        res.send('Error');
    }
});

app.listen(3000, async () => {
    try {
        await main();

    } catch (err) {
        console.log(err);
    }
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/farmStand2');
}