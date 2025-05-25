const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const session = require('express-session');

const app = express();
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

const sessionConfig = {
    secret: 'thisshouldbeabettersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
};

app.use(session(sessionConfig));

const ExpressError = require('./utils/ExpressError');

const campgrounds = require('./routes/campgrounds');
const reviews = require('./routes/reviews');

app.get('/', (req, res) => {
    res.render('home');
});

app.use('/campgrounds', campgrounds);
app.use('/campgrounds/:id/reviews', reviews);

app.all(/(.*)/, (req, res, next) => {
    const err = new ExpressError('Page Not Found', 404);

    next(err);
});

app.use((err, req, res, next) => {
    if (!err.statusCode)
        err.statusCode = 500;

    if (!err.message)
        err.message = 'Something went wrong';

    res.status(err.statusCode).render('error', { err });
});


app.listen(3000, async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/yelp-camp');

        console.log("Serving on port 3000");

    } catch (err) {
        console.log(err);
    }
});