const mysql = require('../utils/mysql');

class orderStatusModel {
    constructor() {
        this.table = 'cmf_order_status'
    }

    async getStatisticsLine(time) {
        return await mysql(this.table)
            .select(mysql.raw("count(*) as count,date_format(FROM_UNIXTIME(create_time), '"
                              + time
                              + "') as create_date"))
            .groupBy("create_date");
    }

    async getStatisticsPie() {
        return await mysql(this.table)
            .select(mysql.raw(" count(*) as count,freight_forwarding"))
            .groupBy("freight_forwarding");
    }
}

module.exports = new orderStatusModel;
