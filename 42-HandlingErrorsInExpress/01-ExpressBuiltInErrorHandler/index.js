const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('tiny'));

app.use((req, res, next) => {
    console.log(req.method, req.path);
    req.requestTime = Date.now();

    next();
});

app.use('/dogs', (req, res, next) => {
    console.log('I love dogs');

    next();
});

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    
    if (password == 'chickennugget') {
        next();
    
    } else {
        throw new Error('Password required!');
    }
}

/*
app.use((req, res, next) => {
    console.log("This is my first middleware!");
    next();

    console.log("This is my first middleware after next()!");
});

app.use((req, res, next) => {
    console.log("This is my second middleware!");
    next();

    console.log("This is my second middleware after next()!");
});
*/

app.get('/', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`);
    res.send('Home Page');
});

app.get('/dogs', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`);
    res.send('Woof');
});

app.get('/secret', verifyPassword, (req, res) => {
    res.send('The Secret');
});

app.get('/error', (req, res) => {
    chicken.fly();
});

app.use((req, res) => {
    res.status(404).send('Not found!');
});

app.listen(3000, () => {
    console.log("Serving on port 3000");
});