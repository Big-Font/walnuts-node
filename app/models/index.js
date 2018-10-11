"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "test";
var config    = require(__dirname + '/../../config/db.json')[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db        = {};

// fs
//   .readdirSync(__dirname)
//   .filter(function(file) {
//     return (file.indexOf(".") !== 0) && (file !== "index.js");
//   })
//   .forEach(function(file) {
//     var model = sequelize.import(path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(function(modelName) {
//   if ("associate" in db[modelName]) {
//     db[modelName].associate(db);
//   }
// });


sequelize.authenticate().then( function() {
  console.log('mysql数据库连接成功');
}).catch( function(err) {
  console.error(err);
  throw err;
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;