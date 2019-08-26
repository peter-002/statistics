require('dotenv-extended').load();

const mysql = {
    client    : process.env.MYSQL_CLIENT,
    connection: {
        host    : process.env.MYSQL_HOST,
        user    : process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: process.env.MYSQL_DATABASE
    },
    debug     : false,
    pool      : {min: 1, max: 30}
};

const redis = {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PROT,
    db  : process.env.REDIS_DB
};

const data_conf = {
    statistics        : {
        0: "每日",
        1: "每月",
        2: "每年"
    },
    freight_forwarding: {
        0: "未知",
        1: "中邮",
        2: "燕文",
        3: "递四方"
    }
};

module.exports = {
    mysql,
    redis,
    data_conf
};