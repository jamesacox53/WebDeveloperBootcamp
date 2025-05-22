const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/greet', (req, res) => {
    const { name = 'anonymous' } = req.cookies;
    
    res.send(`Hey there ${name}`);
});

app.get('/setname', (req, res) => {
    res.cookie('name', 'steve');
    res.cookie('animal', 'shrimp');
    res.send('Ok, sent you a cookie');
});

app.listen(3000, () => {
    console.log('Serving');
});