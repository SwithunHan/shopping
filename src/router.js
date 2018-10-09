import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Recommend from './views/Recommend'
import Chat from './views/Chat'
import Shopping from './views/Shopping'
import Personal from './views/Personal'
import GoodDetail from './views/GoodDetail'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/recommend',
            name: 'recommend',
            component: Recommend
        },
        {
            path: '/chat',
            name: 'chat',
            component: Chat
        },
        {
            path: '/shopping',
            name: 'shopping',
            component: Shopping
        },
        {
            path: '/personal',
            name: 'personal',
            component: Personal
        },
        {
            path: '/goodDetail/:id',
            name: 'goodDetail',
            component: GoodDetail
        }
    ]
})
