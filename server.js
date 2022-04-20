// const Vue = require('vue');
const VueServerRenderer = require('vue-server-renderer');
const Koa = require('koa');
const Router = require('@koa/router');
const fs = require('fs')
const static = require('koa-static'); // 引入静态服务中间件
const { resolve } = require('path')
let app = new Koa(); // 创建一个服务实例
let router = new Router(); // 创建路由实例

const template = fs.readFileSync('./dist/index.server.html', 'utf8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
// manifest 可获取前端打包信息
const clientManifest = require('./dist/vue-ssr-client-manifest.json');
// 通过服务端渲染打包服务端结果
let render = VueServerRenderer.createBundleRenderer(serverBundle, {
    template,
    clientManifest
})

// router.get('/', async (context) => {
//     context.body = await render.renderToString({ url: context.url })
// })

// 如果访问不到就跳转到首页，加载首页时会重新调用前端路由
// history api 404问题解决
router.get('*', async context => {
    // context.body = await render.renderToString({ url: context.url })
    try {
        context.body = await new Promise((resolve, reject) => {
            render.renderToString({ url: context.url }, (err, html) => {
                if (err && err.code == 404) {
                    resolve("Page Not Found")
                }
                resolve(html)
            })
        })
    } catch (e) {
        console.log(e, '===================')
    }
})
app.use(static(resolve(__dirname, 'dist'))) // 注册静态服务中间件
app.use(router.routes()); // 注册路由
app.listen(3003)