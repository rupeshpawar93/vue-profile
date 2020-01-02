import Vue from 'vue'
import Router from 'vue-router'
import Portfolio from '@/components/Portfolio'
import PortfolioDetail from '@/components/PortfolioDetail'
import MyCart from '@/components/Mycart'
import Company from '@/component/Company'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Portfolio',
            component: Portfolio
        },
        {
            path: '/portfolio/detail',
            name: 'mycart',
            component: MyCart,
            props:true
        },
        {
            path:'/company-form',
            name: 'company',
            component: Company
        }
    ]
})