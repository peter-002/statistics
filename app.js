const Koa        = require('koa')
const app        = new Koa()
const views      = require('koa-views')
const json       = require('koa-json')
const onerror    = require('koa-onerror')
const logger     = require('koa-logger'),
      koaBody    = require('koa-body');

const index   = require('./routes'),
      control = require('./common/control');

// error handler
onerror(app)

app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
    extension: 'html',
    default  : 'ejs',
    map      : {
        html: 'ejs',
    },
}))

// 设置文件上传
app.use(koaBody({
    multipart : true,
    formidable: {
        maxFileSize: 200 * 1024 * 1024	                        // 设置上传文件大小最大限制，默认2M
    }
}));

// logger
app.use(async (ctx, next) => {
    Object.assign(ctx, {
        ctrl: control,
    })

    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app
