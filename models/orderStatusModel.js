const mysql = require('../utils/mysql');

class orderStatusModel {
    constructor() {
        this.table = 'cmf_order_status'
    }

    async getMonthList() {
        return await mysql(this.table)
            .select(mysql.raw("count(*) as count,date_format(FROM_UNIXTIME(create_time),'%Y-%m-%d') as create_date"))
            .groupBy("create_date");
    }
}

module.exports = new orderStatusModel;
