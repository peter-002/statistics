const authCtrl = require('../common/auth'),
      service = require('../../common/services');

class order extends authCtrl {
    static async statisticsMonth() {
        return await service.orderService.getMonthList();
    }
}

module.exports = order;
