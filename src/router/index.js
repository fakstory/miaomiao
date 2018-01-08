import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomeComponent from '@/components/home'
import GoodComponent from '@/components/good'
import DownComponent from '@/components/down'
import SearchComponent from '@/components/search'
import DetailComponent from '@/components/detail'
import ListComponent from '@/components/list'
import LoginComponent from '@/components/login'
import RegisterComponent from '@/components/register'

import HotComponent from '@/components/hot'
import MessageComponent from '@/components/message'
import my from '@/components/my'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      component: HomeComponent,
      children:[
        {
          path:'hot',
          component:HotComponent
        },
        {
          path:'message',
          component:MessageComponent
        },
        {
          path:'/',
          redirect:'/home/hot'
        }
      ]
    },
    {
      path: '/good',
      component: GoodComponent
    },
    {
      path: '/login',
      component: LoginComponent
    },
    {
        path: '/register',
        component: RegisterComponent
    },
    {
      path: '/down',
      component: DownComponent,
      children:[
        {
          path:'list',
          component:ListComponent
        },
        {
          path:'/',
          redirect:'/down/list'
        },
        ]
    },
    {
      path: '/search',
      component: SearchComponent
    },
    {
      path: '/detail/:id',
      component: DetailComponent
    },
    {
      path: '*',
      redirect:'/home/hot'
    },
    {
      path: '/my',
      component: my
    },

  ]
})

export default router;
