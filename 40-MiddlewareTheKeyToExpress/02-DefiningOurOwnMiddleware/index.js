const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.use((req, res, next) => {
    console.log("This is my first middleware!");
    next();

    console.log("This is my first middleware after next()!");
})

app.use((req, res, next) => {
    console.log("This is my second middleware!");
    next();

    console.log("This is my second middleware after next()!");
})

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/dogs', (req, res) => {
    res.send('Woof');
});

app.listen(3000, () => {
    console.log("Serving on port 3000");
});