import Vue from 'vue'
import VueRouter from 'vue-router'
import Classify from '@/views/Classify'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Msg from '@/views/Msg'
import Car from '@/views/Car'
import My from '@/views/My'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:"/home"
  },
  {
    path:'/home',
    name:'home',
    component:Home
  },
  {
    path:'/classify',
    name:'classify',
    component:Classify
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/register',
    name:'register',
    component:Register
  },
  {
    path:'/msg',
    name:'msg',
    component:Msg
  },
  {
    path:'/car',
    name:'car',
    component:Car
  },
  {
    path:'/my',
    name:'my',
    component:My
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
