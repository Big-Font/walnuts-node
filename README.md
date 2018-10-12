## sequelize的使用   官网： http://docs.sequelizejs.com/
### Sequelize 是一个 Node.js 平台基于 Promise 的ORM。用于操作管理 MySQL、Postgres、SQLite 等关系型数据库。
```
var Sequelize = require('sequelize');
 
/*
// new Sequelize(database, [username=null], [password=null], [options={}])
// class Sequelize 接收4个参数，后三个参数是可选的
// 没有密码和options
var sequelize = new Sequelize('database', 'username')
// 没有options
var sequelize = new Sequelize('database', 'username', 'password')
// 没有密码有options
var sequelize = new Sequelize('database', 'username', null, {})
// 都有
var sequelize = new Sequelize('my_database', 'john', 'doe', {})
// new Sequelize(uri, [options={}])
// 通过uri连接数据库
var sequelize = new Sequelize('mysql://localhost:3306/database', {})
*/
 
module.exports = new Sequelize('blog', 'root', null, {
    host: 'localhost', // 数据库地址
    dialect: 'mysql', // 指定连接的数据库类型
    pool: {
        max: 5, // 连接池中最大连接数量
        min: 0, // 连接池中最小连接数量
        idle: 10000 // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
    }
})
```

连接数据库初始化时，Sequelize 会设置一个连接池，所以每个数据库创建一个实例即可。   

连接池是创建和管理一个连接的缓冲池的技术，这些连接准备好被任何需要它们的线程使用。  


### 创建用户表  
```
// user.js
 
var Sequelize = require('sequelize');
var sequelize = require('./db');
 
// 创建 model
var User = sequelize.define('user', {
    userName: {
        type: Sequelize.STRING, // 指定值的类型
        field: 'user_name' // 指定存储在表中的键名称
    },
    // 没有指定 field，表中键名称则与对象键名相同，为 email
    email: {
        type: Sequelize.STRING
    }
}, {
    // 如果为 true 则表的名称和 model 相同，即 user
    // 为 false MySQL创建的表名称会是复数 users
    // 如果指定的表名称本就是复数形式则不变
    freezeTableName: false
});
 
// 创建表
// User.sync() 会创建表并且返回一个Promise对象
// 如果 force = true 则会把存在的表（如果users表已存在）先销毁再创建表
// 默认情况下 forse = false
var user = User.sync({ force: false });
 
// 添加新用户
exports.addUser = function(userName, email) {
    // 向 user 表中插入数据
    return User.create({
        user_name: userName,
        email: email
    });
};
 
// 通过用户名查找用户
exports.findByName = function(userName) {
    return User.findOne({ where: { user_name: userName } });
};

```

### 测试用户表
```
// testUser.js
 
var user = require('./user');
 
// 添加用户
user.addUser('jack', 'jack@163.com').then(function() {
    // 查询新添加的用户
    return user.findByName('jack');
}).then(function(user) {
    console.log('****************************');
    console.log('user name: ', user.user_name);
    console.log('user email: ', user.email);
});

```

### 创建文章表  
```
// post.js
 
var Sequelize = require('sequelize');
var sequelize = require('./db');
 
var Post = sequelize.define('post', {
    // 文章标题
    title: {
        type: Sequelize.STRING
    },
    // 文章内容
    content: {
        type: Sequelize.STRING
    },
    // 文章发表时间
    create_at: {
        type: Sequelize.DATE
    }
}, {
    freezeTableName: false
});
 
var post = Post.sync();
 
// 发表新文章
exports.newPost = function(title, content) {
    return post.then(function() {
        Post.create({
            title: title,
            content: content,
            create_at: Date.now()
        });
    });
};
 
// 查找所以文章
exports.findAllPosts = function() {
    return Post.findAll();
};
 
// 通过 ID 查找文章
exports.findById = function(id) {
    return Post.findById(id);
};

```

### 测试文章表  
```
var post = require('./post');
 
// 插入一篇文章
post.newPost('post title', 'post content').then(function() {
    // 通过ID查找文章
    return post.findById(1);
}).then(function(p) {
    console.log('********************************');
    console.log('post title: ', p.title);
    console.log('post content: ', p.content);
});

```

## pm2 pm2.io
1. 软件监控器： pm2 monit  
2. 根据配置文件启动集群: pm2 start ecosystem.config.js --env product -i max  
3. 生成配置文件: pm2 init  