const path = require('path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { v4: uuid } = require('uuid');

// GET /comments - list all comments
// POST /comments - Create a new comment
// GET /comments/:id - Get one comment (using ID)
// PATCH /comments/:id - Update one comment
// DELETE /comments/:id - Destroy one comment

const comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
];

app.get('/comments', (req, res) => {

    const optionsObj = {
        comments: comments
    };

    res.render('comments/index.ejs', optionsObj);
});

app.get('/comments/new', (req, res) => {

    const optionsObj = {
        comments: comments
    };

    res.render('comments/new.ejs', optionsObj);
});

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;

    comments.push({ username, comment, id: uuid() });
    
    res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;

    const comment = comments.find(c => c.id === id);

    const optionsObj = {
        comment: comment
    };

    res.render('comments/show.ejs', optionsObj);
});

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentStr = req.body.comment;

    const commentObj = comments.find(c => c.id === id);
    commentObj.comment = newCommentStr;

    res.redirect('/comments');
});

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Ok, here are your ${qty} ${meat} tacos`);
});

app.listen(3000, () => {
    console.log('On 3000');
});