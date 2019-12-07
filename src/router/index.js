import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/reset.css'

//一级路由
import index from '@/components/index'
import login from '@/components/login'

//二级路由
import admin from '@/components/page/admin'
import adminAdd from '@/components/page/adminAdd'
import data from '@/components/page/data'
import goods from '@/components/page/goods'
import goodsAdd from '@/components/page/goodsAdd'
import welcome from '@/components/page/welcome'
import money from '@/components/page/money'
import moneyAdd from '@/components/page/moneyAdd'

Vue.use(Router)

export default new Router({
  routes: [
   {
     path:'/',
     component:login
   },
   {
     path:'/index',
     component:index,
     children:[
      {
        path:'/admin',
        component:admin
      },
      {
        path:'/adminAdd',
        component:adminAdd
      },
      {
        path:'/goods',
        component:goods
      },
      {
        path:'/goodsAdd',
        component:goodsAdd
      },
      {
        path:'/money',
        component:money
      },
      {
        path:'/moneyAdd',
        component:moneyAdd
      },
      {
        path:'/data',
        component:data
      },
      {
        path:'/welcome',
        component:welcome
      },
      {
        path:'',
        redirect:'/welcome'
      },
     ]
   },
   {
    path:'*',
    redirect:'/login'
   }
 
  ]
})
