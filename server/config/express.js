'use strict';

var port = process.env.PORT;
var env = process.env.NODE_ENV;

var bodyParser = require('body-parser');
var passport = require('passport');
var cors = require('cors');

var config = require('./environment');

module.exports = function (app) {
    require('./passport')(passport);
    app.use(cors());
    app.use(bodyParser.json());
    app.use(passport.initialize());
    app.set('port', port);

    require('../routes')(app);

    app.use(function (err, req, res, next) {
        console.log(err);

        res.status(500).json(err);
    });
};