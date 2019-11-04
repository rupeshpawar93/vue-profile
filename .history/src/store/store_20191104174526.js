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
        },
        decrement(state) {
            --state.mycart
        }
    },
    actions: {
        addIncrement(context,flag) {
            if(flag==1){
                context.commit('increment')
            } else {
                context.commit('decrement')
            }
        }
    }
});