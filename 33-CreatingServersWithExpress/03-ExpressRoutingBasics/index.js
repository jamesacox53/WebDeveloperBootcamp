const express = require('express');
const app = express();

app.get('/cats', (req, res) => {
    res.send('<h1>Cats</h1>');
});

app.post('/cats', (req, res) => {
    res.send('Post request to /cats');
});

app.get('/dogs', (req, res) => {
    res.send('<h1>Dogs</h1>');
});

app.get('/', (req, res) => {
    res.send('<h1>This is my homepage!</h1>');
});

app.get('*', (req, res) => {
    res.send("<h1>I don't know that route!</h1>");
});

app.listen(3000, () => {
    console.log("Listening on Port 3000");   
});