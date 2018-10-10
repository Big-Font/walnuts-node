var path = require('path');

var settings = {
    // base config
    path: path.normalize(path.join(__dirname, '..')),
    port: process.env.NODE_PORT || 6000,
    database: process.env.DATABASE || "mysql://root@47.95.223.216:3306/menblog",
    theme: process.env.THEME || 'defult',   // 主题名称

    // application config
    
}