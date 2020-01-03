import Vue from 'vue'
import Router from 'vue-router'
import Portfolio from '@/components/Portfolio'
import PortfolioDetail from '@/components/PortfolioDetail'
import MyCart from '@/components/Mycart'
import Company from '@/components/Company'
import Login from '@/components/Login'
import Home from '@/components/Home'
import store from '@/store/store'

Vue.use(Router)

let router =  new Router({
    mode: 'history',
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
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'/home',
            name: 'Home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        }
    ]
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isAuthLogin && localStorage.getItem('token')) {
        next()
        return
      }
      next('/login')
    } else {
      next()
    }
  });

  export default router; 