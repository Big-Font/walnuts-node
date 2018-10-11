// var models = require('../app/models');
var db = require('../app/models/mysql')

// var User = models.sequlize.define('admins');

module.exports = function(app) {
  /* GET home page. */
  app.get('/', function(req, res, next) {
    // User.finAll({}).then(function(data) {
    //   console.log(data)
    // })
    db.query(`SELECT * FROM t_sys_user`, function( err, user) {
      if(err) {
        res.json({
          code: 0,
          message: '数据库查询失败'
        })
      }else {
        console.log(user.username)
        res.json({
          code: 0,
          message: '请求成功',
          userInfo: user
        })
       
        // res.render('index', { title: user.username });
      }
    })
    // res.render('index', { title: 'Express' });
  });
};
