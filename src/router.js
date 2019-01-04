import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {
            path:'/',
            name:'home',
            component:() => import('@/views/home.vue')
        },
        {
            path:'/http',
            name:'http',
            component:() => import('@/views/http.vue')
        }
    ]
})