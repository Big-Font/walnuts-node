var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var settings = require('./settings');

module.exports = function(app) {
    // app.set('port', settings.port);
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');

    app.use(bodyParser.json()); // for parsing application/json
	app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use(session({
        resave: false,
        saveUninitialized: false,
        secret: 'keyboard cat'
    }))
    app.use(cookieParser('my name is jason wang'));

    //  static dir
    app.use(express.static(path.join(__dirname, '../public')));

}