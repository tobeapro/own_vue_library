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
            path:'/button',
            name:'button',
            component:() => import('@/views/button.vue')
        },
        {
            path:'/message',
            name:'message',
            component:() => import('@/views/message.vue')
        },
        {
            path:'/dialog',
            name:'dialog',
            component:() => import('@/views/dialog.vue')
        },
        {
            path:'/http',
            name:'http',
            component:() => import('@/views/http.vue')
        }
    ]
})