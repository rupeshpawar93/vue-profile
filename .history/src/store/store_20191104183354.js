import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        myshare:0,
        sharePrice:0
    },
    mutations: {
        increment(state,flag) {
            ++state.myshare
        },
        decrement(state,flag) {
            --state.myshare
        }
    },
    actions: {
        addIncrement(context,flag) {
            console.log("hit");
            if(flag==1){
                context.commit('increment')
            } else {
                context.commit('decrement')
            }
        }
    }
});