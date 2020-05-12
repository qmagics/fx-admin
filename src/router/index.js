import Vue from 'vue'
import VueRouter from 'vue-router'
import Master from '@/layout/Master.vue';
import Simple from '@/layout/Simple.vue';

Vue.use(VueRouter)

//在菜单列表中显示的路由
export const MenuRoutes = [
  {
    path: '/home',
    component: () => import('@/views/Home.vue'),
    name: 'Home',
    meta: {
      title: '首页',
      icon: 'el-icon-s-home'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      title: '关于',
      icon: 'el-icon-info'
    }
  },
  {
    path: '/demo',
    name: 'Demo',
    redirect: '/demo/fx-table',
    component: Simple,
    meta: {
      title: 'DEMO',
      icon: 'el-icon-document-copy'
    },
    children: [
      {
        path: '/demo/fx-table',
        name: 'FxTable',
        component: () => import('@/views/demo/FxTable.vue'),
        meta: {
          title: 'FxTable 表格',
          icon: 'el-icon-date'
        }
      }
    ]
  }
]

export const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'MenuRoutes',
    component: Master,
    meta: {
      title: 'MenuBase'
    },
    children: MenuRoutes
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
