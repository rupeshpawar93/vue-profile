import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        myshare:0  
    },
    mutations: {
        increment(state) {
            ++state.mycart
        },,
        increment(state) {
            ++state.mycart
        }
    }
});