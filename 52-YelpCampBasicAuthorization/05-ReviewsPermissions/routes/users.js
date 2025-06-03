const express = require('express');
const passport = require('passport');

const router = express.Router();

const catchAsync = require('../utils/catchAsync');
const { storeReturnTo } = require('../middleware');
const User = require('../models/user');

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', catchAsync(async (req, res, next ) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });

        const regUser = await User.register(user, password);
        
        req.login(regUser, err => {
            if(err) return next(err);

            req.flash('success', 'Welcome to YelpCamp!');
        res.redirect('/campgrounds');
        });
        
    } catch (err) {
        req.flash('error', err.message);
        res.redirect('register');
    }
}));

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login', storeReturnTo, passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
    const redirectUrlStr = res.locals.returnTo || '/campgrounds';
    
    req.flash('success', 'Welcome Back!');
    res.redirect(redirectUrlStr);
});

router.get('/logout', (req, res) => {
    req.logout(function(err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Goodbye!');
        res.redirect('/campgrounds');
    });
});

module.exports = router;