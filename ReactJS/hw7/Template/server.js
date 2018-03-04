let mongoose = require('mongoose');
let express = require('express');
let logger = require('morgan');

require('./models/user');

let routeUser = require('./routes/user');

mongoose.connect('mongodb://localhost:27017/blog');

let app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    next();
});

app.use(express.static(__dirname + '/dist'));

app.use(logger('combined'));

//Наши маршруты
app.use('/api/users', routeUser);

app.use(function (req, res, next) {
    let err = new Error('Page Not Found!');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});

app.listen(8082, function () {
   console.log('Сервер успешно запущен!');
});