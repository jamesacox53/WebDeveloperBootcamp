const express = require('express');
const app = express();

app.get('/search', (req, res) => {
    const qStr = req.query.q;
    
    if (qStr) {
        const msgStr = '<h1>Search results for q: ' + qStr +
        '</h1>';
    
        res.send(msgStr);

    } else {
        res.send("<h1>Nothing found if nothing searched</h1>");
    }
});

app.get('/r/:subreddit', (req, res) => {
    const subredditStr = req.params.subreddit;
    
    res.send(`<h1>Browsing the ${subredditStr} subreddit!</h1>`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
    const subredditStr = req.params.subreddit;
    const postIdStr = req.params.postId;

    const msgStr = '<h1>Viewing Post ID: ' + postIdStr +
    ' on the ' + subredditStr +' subreddit!</h1>';
    
    res.send(msgStr);
});

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