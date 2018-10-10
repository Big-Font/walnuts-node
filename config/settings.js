var path = require('path');

var settings = {
    // base config
    path: path.normalize(path.join(__dirname, '..')),
    port:  6000,
    database: process.env.DATABASE || "mysql://root@47.95.223.216:3306/menblog",
    theme: process.env.THEME || 'defult',   // 主题名称

    // application config
	postNum: process.env.POST_NUM || '10',//每页显示文章个数
	auth_cookie_name: process.env.AUTH_COOKIE_NAME || 'nd_secret',//cookie 名字
	session_secret: process.env.SESSION_SECRET || 'a743894a0e',//session加密串
	cookie_secret: process.env.COOKIE_SECRET || 'a743894a0e',//session加密串
	version: process.env.VERSION || '1.0.0',
	
	// smtp :{
    //     use_authentication: true, //如果我们使用QQ等邮箱，这个必须写且为true
    //     host: 'wangshen911.163.com',   //定义用来发送邮件的邮箱服务器，一般是QQ这些的
    //     port:25,    //定义服务器端口，一般是25   ,如果是使用SSL端口一般为465,或者587
    //     ssl:false,     //默认不适用SSL，可以省略不写
    //     user: '773983210@163.com',   //邮箱用户名
    //     pass:'123456'   //输入邮箱密码
	// }

}