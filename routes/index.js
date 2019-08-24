const router     = require('koa-router')(),
      statistics = require('./statistics');

router.use(statistics.routes(), statistics.allowedMethods());

module.exports = router;
