const router = require('koa-router')(),
      order  = require('./order');

router.prefix('/v1');

router.use(order.routes(), order.allowedMethods());

module.exports = router;
