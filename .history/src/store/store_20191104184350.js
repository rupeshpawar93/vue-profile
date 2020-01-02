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
            state.price+=state.price
        },
        minusPrice(state,price) {
            state.price-=price
        }
    },
    actions: {
        addIncrement(context,flag) {
            console.log("hit");
            if(flag){
                context.commit('increment')
            } else {
                context.commit('decrement')
            }
        },
        addPriceValue(context,flag,price) {
            console.log("hit");
            if(flag) {
                context.commit('addPrice',price)
            } else {
                context.commit('minusPrice',price)
            }
        }
    }
});