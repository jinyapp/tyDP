import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: '登录界面'
    }
  },
  {
    path: '/login',
    redirect: '/'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '酷屏首页统计图'
    }
  },
  {
    path: '/brand',
    name: 'Brand',
    component: () => import('@/views/Brand.vue'),
    meta: {
      title: '公司品牌介绍'
    }
  },

  
  // {
  //   path: '/',
  //   name: 'Manage',
  //   component: () => import('@/views/Manage.vue'),
  //   meta: {
  //     title: '数据统计界面'
  //   }
  // },
  // {
  //   path: '/login',
  //   redirect: '/'
  // },
  
  {
    path: '/manage',
    name: 'Manage',
    component: () => import('@/views/Manage.vue'),
    meta: {
      title: '融媒体中心稿件统计图'
    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
