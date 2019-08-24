const config = require('./config').mysql;
var knex     = require('knex'), db;

// 确保数据库连接只初始一次
if (!db) {
    db = knex(config);
}

module.exports = db;

// module.exports = require('bookshelf')(db).plugin(
//     [
//         'registry',
//         'pagination',
//         'bookshelf-eloquent'
//     ]
// );
