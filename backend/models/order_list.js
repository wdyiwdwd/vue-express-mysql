var Sequelize = require('sequelize');
var db = require('./index').DB;

// 创建 model
var OrderList = db.define('order_list', {
    status: {
    	type: Sequelize.STRING
    },
    start: {
    	type: Sequelize.DATE
    },
    schedule: {
        type: Sequelize.DATE    //预计完成时间
    },
    end: {
        type: Sequelize.DATE    //实际完成时间
    },
    buyer: {
    	type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        isEmail: true
    },
    remark: {
        type: Sequelize.STRING
    }
    // 没有指定 field，表中键名称则与对象键名相同，为 email
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
var orderList = OrderList.sync({ force: false });

module.exports = OrderList; 