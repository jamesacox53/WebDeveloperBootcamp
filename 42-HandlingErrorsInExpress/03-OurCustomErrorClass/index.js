const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('tiny'));

const AppError = require('./appError');

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
        throw new AppError('Password required!', 401);
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

app.get('/admin', (req, res) => {
    throw new AppError('You are not an admin', 403);
});

app.get('/error', (req, res) => {
    chicken.fly();
});

app.use((req, res) => {
    res.status(404).send('Not found!');
});

// app.use((err, req, res, next) => {
//     console.log("*************************************");
//     console.log("***************ERROR*****************");
//     console.log("*************************************");

//     next(err);
// });

app.use((err, req, res, next) => {
    const statusInt = err.status;
    const messageStr = err.message;
    
    if (statusInt) {
        res.status(statusInt);
    
    } else {
        res.status(500);
    }

    if (messageStr) {
        res.send(messageStr);
    
    } else {
        res.send('Error');
    }
});

app.listen(3000, () => {
    console.log("Serving on port 3000");
});