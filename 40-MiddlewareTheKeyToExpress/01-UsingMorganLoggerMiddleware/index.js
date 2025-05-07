const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/dogs', (req, res) => {
    res.send('Woof');
});

app.listen(3000, () => {
    console.log("Serving on port 3000");
});