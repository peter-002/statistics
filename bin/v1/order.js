const authCtrl = require('../common/auth'),
      service = require('../../common/services');

class order extends authCtrl {
    /**
     * 折线图
     *
     * @param ctx
     * @returns {Promise<*>}
     */
    static async lineCharts(ctx) {
        return await service.orderService.getStatisticsLine(ctx);
    }

    /**
     * 饼状图
     *
     * @returns {Promise<*>}
     */
    static async pieCharts() {
        return await service.orderService.getStatisticsPie();
    }
}

module.exports = order;
