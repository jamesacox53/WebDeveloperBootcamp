const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
    res.send('Hey there');
});

app.get('/setname', (req, res) => {
    res.cookie('name', 'steve');
    res.cookie('animal', 'shrimp');
    res.send('Ok, sent you a cookie');
});

app.listen(3000, () => {
    console.log('Serving');
});