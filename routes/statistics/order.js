const router = require('koa-router')(),
      config = require('../../utils/config');

router.get('/line', async (ctx) => {
    let data = await ctx.ctrl.order.lineCharts(ctx);

    await ctx.render('statistics/line', {
        data           : JSON.stringify(data),
        statistics_conf: config.data_conf.statistics,
        url_param      : ctx.request.query
    });
});

router.get('/pie', async (ctx) => {
    let data = await ctx.ctrl.order.pieCharts();

    await ctx.render('statistics/pie', {
        data: JSON.stringify(data)
    });
});

module.exports = router;
