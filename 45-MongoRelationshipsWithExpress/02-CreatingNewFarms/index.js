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

const Product = require('./models/product');
const Farm = require('./models/farm');

const categoryArr = ['Fruit', 'Vegetable', 'Dairy'];

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e));
    };
}

// FARM ROUTES
app.get('/farms', wrapAsync(async (req, res, next) => {
    const farmArr = await Farm.find({});

    const optionsObj = {
        farmArr: farmArr
    };

    res.render('farms/index.ejs', optionsObj);
}));

app.get('/farms/new', (req, res) => {
    res.render('farms/new.ejs');
});

app.post('/farms', wrapAsync(async (req, res, next) => {
    const newFarmObj = new Farm(req.body);
    await newFarmObj.save();

    res.redirect(`/farms`);
}));


// PRODUCT ROUTES
app.get('/products', wrapAsync(async (req, res, next) => {
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
}));

app.get('/products/new', (req, res) => {
    const optionsObj = {
        categoryArr: categoryArr
    };

    res.render('products/new.ejs', optionsObj);
});

app.post('/products', wrapAsync(async (req, res, next) => {
    const newProductObj = new Product(req.body);
    await newProductObj.save();

    res.redirect(`/products/${newProductObj._id}`);
}));

app.get('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const productObj = await Product.findById(id);

    if (!productObj)
        throw new AppError('Product not found', 404);

    const optionsObj = {
        productObj: productObj
    };

    res.render('products/show.ejs', optionsObj);
}));

app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const productObj = await Product.findById(id);

    if (!productObj)
        throw new AppError('Product not found', 404);

    const optionsObj = {
        productObj: productObj,
        categoryArr: categoryArr
    };

    res.render('products/edit.ejs', optionsObj);
}));

app.put('/products/:id/', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const optionsObj = { runValidators: true, new: true };

    const productObj = await Product.findByIdAndUpdate(id, req.body, optionsObj);

    res.redirect(`/products/${productObj._id}`);
}));

app.delete('/products/:id/', wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);

    res.redirect('/products');
}));

function handleValidationErr(err) {
    const newErr = new AppError(`Validation failed. ${err.message}`, 400);

    return newErr;
}

app.use((err, req, res, next) => {
    console.log(err.name);

    if (err.name = 'ValidationError')
        err = handleValidationErr(err);

    next(err);
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