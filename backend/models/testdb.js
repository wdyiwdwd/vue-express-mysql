// testdb.js

var Sequelize = require('sequelize');
var db = require('./index').DB;

// 创建 model
var Test = db.define('test', {
    name: {
        type: Sequelize.STRING, // 指定值的类型
        field: 'name' // 指定存储在表中的键名称
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
var test = Test.sync({ force: true });

module.exports = Test; 