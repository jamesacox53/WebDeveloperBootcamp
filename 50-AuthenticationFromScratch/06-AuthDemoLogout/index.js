const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'notagoodsecret' }));

const User = require('./models/user');

app.get('/', (req, res) => {
    res.send('This is the homepage');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const hash = await bcrypt.hash(password, 12);

    const user = new User({
        username: username,
        password: hash
    });

    await user.save();
    req.session.userId = user._id;

    res.redirect('/');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne(({ username }));

    const isValid = await bcrypt.compare(password, user.password);

    if (isValid) {
        req.session.userId = user._id;

        res.redirect('/secret');
    
    } else {
        res.redirect('/login');
    }
});

app.post('/logout', async (req, res) => {
    // req.session.userId = null;
    req.session.destroy();

    res.redirect('/login');
});

app.get('/secret', (req, res) => {
    if(!req.session.userId) {
        res.redirect('/login');
    
    } else {
        res.render('secret');
    }
});

app.listen(3000, async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/authDemo');

        console.log("Serving on port 3000");

    } catch (err) {
        console.log(err);
    }
});