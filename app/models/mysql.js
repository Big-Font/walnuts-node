var mysql = require('mysql');

// 后台数据库连接池
const db = mysql.createPool({
    host: '47.95.223.216',
    port: '3306',
    user: 'root',
    password: 'SHEN396689144@',
    database: 'jason_blog'
});

module.exports = db;