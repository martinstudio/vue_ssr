const Vue = require('vue');
const VueServerRenderer = require('vue-server-renderer');
const Koa = require('koa');
const Router = require('@koa/router');
const fs = require('fs')
const static = require('koa-static'); // 引入静态服务中间件
const { resolve } = require('path')
let app = new Koa(); // 创建一个服务实例
let router = new Router(); // 创建路由实例

// let vm = new Vue({
//     data() {
//         return {
//             name: 'Jack'
//         }
//     },
//     template: '<div>hello {{name}}</div>'
// })

const serverBundle = fs.readFileSync('./dist/server.bundle.js', 'utf8')
const template = fs.readFileSync('./dist/index.server.html', 'utf8')
// let render = VueServerRenderer.createRenderer({
//     template
// });
// 通过服务端渲染打包服务端结果
let render = VueServerRenderer.createBundleRenderer(serverBundle, {
    template
})

router.get('/', async (contxt) => {
    contxt.body = await render.renderToString()
})
app.use(router.routes()); // 注册路由
app.use(static(resolve(__dirname, 'dist'))) // 注册静态服务中间件
app.listen(3003)