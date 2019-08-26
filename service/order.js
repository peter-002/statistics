const model  = require('../common/model'),
      config = require('../utils/config'),
      {
          log,
          getParam
      }      = require('../common/function');

class order {
    /**
     * 获取统计 折线图
     *
     * @param ctx
     * @returns {Promise<*>}
     */
    static async getStatisticsLine(ctx) {
        let time,
            query    = model.orderStatus,
            param    = getParam(ctx),
            argument = Number(param.argument);

        switch (argument) {
            case 0:
                time = '%Y-%m-%d';
                break;
            default:
            case 1:
                time = '%Y-%m';
                break;
            case 2:
                time = '%Y';
                break;
        }

        return query.getStatisticsLine(time);
    }

    static async getStatisticsPie() {
        let data = await model.orderStatus.getStatisticsPie();

        data.map(function (res) {
            res['explain'] =  config.data_conf.freight_forwarding[res.freight_forwarding]
        });

        return data;
    }
}

module.exports = order;
