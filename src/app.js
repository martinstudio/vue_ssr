import Vue from 'vue';
import { createApp } from 'vue';
import { render } from 'vue';
import App from './App.vue';
import createRouter from './createRouter';
import createStore from './createStore';

// const app = new Vue({
//     render: h => h(App)
// })
// app.$mount("#app")

// 将实例作为方法导出供客户端和服务端调用，这样可以保证每个用户访问都生成一个实例
export default () => {
    let router = createRouter()
    let store = createStore()
    let app = new Vue({
        router,
        store,
        render: h => h(App)
    });
    return { app, router, store }
}