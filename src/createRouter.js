import Router from '@koa/router';
// 创建路由文件，只是到处的结果需要是一个函数
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

let Bar = () => import('./components/Bar.vue')
let Foo = () => import('./components/Foo.vue')

export default () => {
    const router = new VueRouter({
        mode: 'history',
        routes: [
            { path: '/', component: Foo },
            { path: '/bar', component: Bar }
        ]
    })
    return router;
}