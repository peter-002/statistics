const router = require('koa-router')();

router.get('/order', async (ctx) => {

    let data = ctx.body = await ctx.ctrl.order.statisticsMonth();

    await ctx.render('statistics/order', {
        data: JSON.stringify(data)
    });
});

module.exports = router;
