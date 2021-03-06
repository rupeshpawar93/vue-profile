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
        },
        addPrice(state,price) {
            state.sharePrice=state.sharePrice+price
        },
        minusPrice(state,price) {
            state.sharePrice=state.sharePrice-price
        }
    },
    actions: {
        addIncrement(context,flag) {
            if(flag){
                context.commit('increment')
            } else {
                context.commit('decrement')
            }
        },
        addPriceValue(context,[flag,price]) {
            if(flag) {
                context.commit('addPrice',price)
            } else {
                context.commit('minusPrice',price)
            }
        }
    }
});