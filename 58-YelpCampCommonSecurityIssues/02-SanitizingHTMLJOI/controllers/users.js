const User = require('../models/user');

module.exports.renderRegister = (req, res) => {
    res.render('users/register');
};

module.exports.register = async (req, res, next) => {
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
};

module.exports.renderLogin = (req, res) => {
    res.render('users/login');
};

module.exports.login = (req, res) => {
    const redirectUrlStr = res.locals.returnTo || '/campgrounds';
    
    req.flash('success', 'Welcome Back!');
    res.redirect(redirectUrlStr);
};

module.exports.logout = (req, res) => {
    req.logout(function(err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Goodbye!');
        res.redirect('/campgrounds');
    });
};