const path = require('path');

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home.ejs')
});


app.listen(3000, () => {
    console.log("Listening on Port 3000");   
});