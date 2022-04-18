const Vue = require('vue');
const VueServerRenderer = require('vue-server-renderer');
const Koa = require('koa');
const Router = require('@koa/router');
const fs = require('fs')
let app = new Koa(); // 创建一个服务实例
let router = new Router();

let vm = new Vue({
    data() {
        return {
            name: 'Jack'
        }
    },
    template: '<div>hello {{name}}</div>'
})
const template = fs.readFileSync('./temp.html', 'utf8')
let render = VueServerRenderer.createRenderer({
    template
});

router.get('/', async (contxt) => {
    contxt.body = await render.renderToString(vm)
})

app.use(router.routes()); // 注册路由
app.listen(3000)