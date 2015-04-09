'use strict';

var port = process.env.PORT = process.env.PORT || 3000;
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var http = require('http');
var express = require('express');
var mongoose = require('mongoose');

var config = require('./config/environment/');

mongoose.connect(config.mongo.uri, function () {
    console.log('> Connected to DB %s', config.mongo.uri);
});

var app = express();

var server = http.createServer(app);

require('./config/express')(app);

server.listen(app.get('port'), function () {
    console.log('Server running on port %s in %s mode', app.get('port'), process.env.NODE_ENV);
});