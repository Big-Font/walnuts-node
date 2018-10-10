var express = require('express');
var environment = require('./config/environment');
var routers = require('./routers');
var models = require('./app/models');

var app = express();

environment(app);
routers(app);

models.sequlize.sync.then( function() {
    var server = app.listen(app.get('port'), function() {
        console.log('listen on port' + server.address().port);
    });
});