if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const helmet = require('helmet');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const sanitizeV5 = require('./utils/mongoSanitizeV5.js');

const User = require('./models/user');

const app = express();
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('query parser', 'extended');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(sanitizeV5({ replaceWith: '_' }));

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/yelp-camp';
const secretStr = process.env.SECRET || 'thisshouldbeabettersecret!';
const portInt = process.env.PORT || 3000;

const store = MongoStore.create({
    mongoUrl: dbUrl,
    touchAfter: 24 * 60 * 60,
    crypto: {
        secret: secretStr
    }
});

store.on('error', function (e) {
    console.log('session store error', e);
});

const sessionConfig = {
    name: 'yelpCampSession',
    secret: secretStr,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        httpOnly: true,
        // secure:true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
};

app.use(session(sessionConfig));
app.use(flash());
app.use(helmet());

const connectSrcUrls = [
    "https://api.mapbox.com/",
    "https://a.tiles.mapbox.com/",
    "https://b.tiles.mapbox.com/",
    "https://events.mapbox.com/",
];

const scriptSrcUrls = [
    "https://stackpath.bootstrapcdn.com/",
    "https://api.tiles.mapbox.com/",
    "https://api.mapbox.com/",
    "https://kit.fontawesome.com/",
    "https://cdnjs.cloudflare.com/",
    "https://cdn.jsdelivr.net",
];

const styleSrcUrls = [
    "https://kit-free.fontawesome.com/",
    "https://stackpath.bootstrapcdn.com/",
    "https://api.mapbox.com/",
    "https://api.tiles.mapbox.com/",
    "https://fonts.googleapis.com/",
    "https://use.fontawesome.com/",
    "https://cdn.jsdelivr.net"
];

const imgSrcUrls = [
    "https://res.cloudinary.com/dcj6l3ibf/",
    "https://images.unsplash.com/",
];

const fontSrcUrls = [];

const helmetCSPOpts = {
    directives: {
        defaultSrc: [],
        connectSrc: ["'self'", ...connectSrcUrls],
        scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
        styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
        workerSrc: ["'self'", "blob:"],
        objectSrc: [],
        imgSrc: ["'self'", "blob:", "data:", ...imgSrcUrls],
        fontSrc: ["'self'", ...fontSrcUrls],
    }
};

app.use(helmet.contentSecurityPolicy(helmetCSPOpts));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const ExpressError = require('./utils/ExpressError');

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');

    return next();
});

const userRoutes = require('./routes/users');
const campgroundRoutes = require('./routes/campgrounds');
const reviewRoutes = require('./routes/reviews');

app.get('/', (req, res) => {
    res.render('home');
});

app.use('/', userRoutes);
app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/reviews', reviewRoutes);

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


app.listen(portInt, async () => {
    try {
        await mongoose.connect(dbUrl);

        console.log("Serving on port " + portInt);

    } catch (err) {
        console.log(err);
    }
});