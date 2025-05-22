const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
    const { name = 'anonymous' } = req.cookies;
    
    res.send(`Hey there ${name}`);
});

app.get('/setname', (req, res) => {
    res.cookie('name', 'steve');
    res.cookie('animal', 'shrimp');
    res.send('Ok, sent you a cookie');
});

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'apple', { signed: true });
    res.send('Ok, sent you a signed cookie');
});

app.get('/verifyfruit', (req, res) => {
    const { fruit } = req.signedCookies;
    
    if (fruit) {
        res.send(`Verified fruit ${fruit}`);
    
    } else {
        res.send('Fruit tampered with');
    }
});

app.listen(3000, () => {
    console.log('Serving');
});