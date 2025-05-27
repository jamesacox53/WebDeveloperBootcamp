const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));

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

    res.redirect('/');
});

app.get('/secret', (req, res) => {
    res.send('This is a secret.');
});

app.listen(3000, async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/authDemo');

        console.log("Serving on port 3000");

    } catch (err) {
        console.log(err);
    }
});