const express = require('express');
const app = express();

app.use((req, res) => {
    console.log("We got a new request.");
    res.send('<h1>This is my webpage!</h1>');
});

app.listen(3000, () => {
    console.log("Listening on Port 3000");   
});