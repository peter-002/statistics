const model = require('../common/model');

class order {
    static async getMonthList() {
        let query = model.orderStatus;

        return query.getMonthList();
    }
}

module.exports = order;
