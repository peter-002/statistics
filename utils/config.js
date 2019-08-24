require('dotenv-extended').load();

const mysql = {
    client    : process.env.MYSQL_CLIENT,
    connection: {
        host    : process.env.MYSQL_HOST,
        user    : process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: process.env.MYSQL_DATABASE
    },
    debug     : true,
    pool      : {min: 1, max: 30}
};

const redis = {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PROT,
    db  : process.env.REDIS_DB
};

module.exports = {
    mysql,
    redis
};