import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        myshare:0,
        sharePrice:0,
        first_name:'rupesh',
        isLogin:false,
        token:''
    },
    getters: {
        upperCase:state=>state.first_name.toUpperCase(),
        isAuthLogin(state) { return state.isLogin; }
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
        },
        auth_login(state) {
            state.isLogin = !state.isLogin
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
        },
        addLogin(context,field) {
            return new Promise((resolve,reject)=>{
                Axios.post('http://localhost:3000/api/app/signin',field)
                .then((response)=>{
                        if(response.data.status==0) {
                            reject(response.data);
                        } else {
                            localStorage.setItem('token',response.data.data.token);
                            context.commit('auth_login');
                            console.log(this.state.isLogin)
                            resolve(response.data);
                        }
                    }).catch((err)=>{
                        reject(err);
                    });
            })
        },
        fileList(context,[param,page]) {
            const options = {
                headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}
            };
            let fileType = 'video-list';
            if(param=='Audio List') {
                fileType = 'audio-list';
            }
            return new Promise((resolve,reject) => {
                Axios
                .get('http://localhost:3000/api/app/'+fileType+'?page='+page,options)
                .then((response) => {
                    resolve(response.data.data);
                }).catch(err=>reject(err));
            });
        },
        logout() {
            localStorage.setItem('token','');
        }
    }
});

export default store;