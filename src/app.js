import Vue from 'vue';
import { render } from 'vue';
import App from './App.vue';

const app = new Vue({
    render: h => h(App)
})
app.$mount("#app")