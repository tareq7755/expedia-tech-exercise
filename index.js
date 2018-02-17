const express = require('express');
const path = require('path');
const offers = require('./src/responseHandlers/offers');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

//serves the static homepage
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/', 'index.html')));

//gets the offers
app.get('/offers', (req, res) => offers(JSON.parse(req.query.data))
    .then(data => {
        res.status(200);
        res.send(data);
    }).catch(error => {
        res.status(error.statusCode);
        res.send(error.message);
    })
);

app.get('*', (req, res) => {
    res.status(404);
    res.send('');
});

app.listen(3000, () => console.log('server is listening'));