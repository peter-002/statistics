const async = require('async');

/**
 * 打印
 */
const log = function () {
    async.apply(console.log, '>');
};

/**
 * 获取月头和月尾
 *
 * @returns {number[]}
 */
let getMonth = function () {
    let data = new Date();          // 本月

    data.setDate(1);
    data.setHours(0);
    data.setSeconds(0);
    data.setMinutes(0);

    let data1 = new Date();         // 下月

    data.getMonth() == 12
    ? data1.setMonth(1)
    : data1.setMonth(data.getMonth() + 1);

    data1.setDate(1);
    data1.setHours(0);
    data1.setSeconds(0);
    data1.setMinutes(0);

    let startMonth = parseInt(data.getTime() / 1000),
        endMonth   = parseInt(data1.getTime() / 1000) - 1;

    return [startMonth, endMonth];
};

module.exports = {
    log,
    getMonth
};
