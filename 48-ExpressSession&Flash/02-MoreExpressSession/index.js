const express = require('express');
const session = require('express-session');

const app = express();

const sessionOpts = {
    secret: 'thisisnotagoodsecret',
    saveUninitialized: false,
    resave: false
};

app.use(session(sessionOpts));

app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    
    } else {
        req.session.count = 1;
    }

    res.send(`You have viewed this page ${req.session.count} time(s)`);
});

app.get('/register', (req, res) => {
    const { username = 'anonymous' } = req.query;
    
    req.session.username = username;

    res.redirect('/greet');
});

app.get('/greet', (req, res) => {
    const { username = 'anonymous' } = req.session;

    res.send(`Welcome back ${username}`);
});

app.listen(3000, () => {
    console.log('Serving');
});