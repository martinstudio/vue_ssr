import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default () => {
    const store = new Vuex.Store({
        state: {
            name: 'Jack',
            age: 50
        },
        mutations: {
            CHANGENAME(state) {
                state.name = "Tom"
            },
            CHANGEAGE(state) {
                state.age = 20
            }
        },
        actions: {
            changeAll({ commit }) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        commit("CHANGENAME")
                        commit("CHANGEAGE")
                        resolve()
                    }, 3000);
                })
            }
        },
        getters: {}
    })

    if (typeof window != 'undefined' && window.__INITIAL_STATE__) {
        store.state = window.__INITIAL_STATE__
    }

    return store;
}