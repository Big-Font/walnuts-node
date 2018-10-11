var models = require('../app/models');

// var User = models.sequlize.define('admins');

module.exports = function(app) {
  /* GET home page. */
  app.get('/', function(req, res, next) {
    // User.finAll({}).then(function(data) {
    //   console.log(data)
    // })
    res.render('index', { title: 'Express' });
  });
};
