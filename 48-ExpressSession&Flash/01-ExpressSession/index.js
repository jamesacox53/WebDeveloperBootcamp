const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({ secret: 'thisisnotagoodsecret' }));

app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    
    } else {
        req.session.count = 1;
    }

    res.send(`You have viewed this page ${req.session.count} time(s)`);
});

app.listen(3000, () => {
    console.log('Serving');
});