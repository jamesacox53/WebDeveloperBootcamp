const path = require('path');

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/cats', (req, res) => {
    const catArr = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'];

    const optionsObj = {
        catArr: catArr
    };

    res.render('cats.ejs', optionsObj);
});

app.get('/rand', (req, res) => {
    const randInt = Math.floor(Math.random() * 10) + 1;

    const optionsObj = {
        randInt: randInt
    };
    
    res.render('random.ejs', optionsObj);
});

app.get('/r/:subreddit', (req, res) => {
    const subredditStr = req.params.subreddit;

    const optionsObj = {
        subredditStr: subredditStr
    };
    
    res.render('subreddit.ejs', optionsObj);
});

app.get('/', (req, res) => {
    res.render('home.ejs')
});


app.listen(3000, () => {
    console.log("Listening on Port 3000");   
});