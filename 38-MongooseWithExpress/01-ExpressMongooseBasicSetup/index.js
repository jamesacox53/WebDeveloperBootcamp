const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send('Woof');
});

app.listen(3000, async () => {
    try {
        await main();
    
    } catch(err) {
        console.log(err);
    }
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/movieApp');
}