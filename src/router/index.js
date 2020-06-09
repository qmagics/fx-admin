import Vue from 'vue'
import VueRouter from 'vue-router'
import Master from '@/layout/Master';
import Simple from '@/layout/Simple';

Vue.use(VueRouter)

//在菜单列表中显示的路由
export const MenuRoutes = [
  {
    path: '/home',
    component: () => import('@/views/Home'),
    name: 'Home',
    meta: {
      title: '首页',
      icon: 'el-icon-s-home'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About'),
    meta: {
      title: '关于',
      icon: 'el-icon-info'
    }
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Simple,
    redirect: '/demo/fx-table',
    meta: {
      title: 'DEMO',
      icon: 'el-icon-document-copy'
    },
    children: [
      {
        path: '/demo/fx-table',
        name: 'FxTable',
        component: Simple,
        redirect: '/demo/fx-table/list',
        meta: {
          title: 'FxTable 表格',
          icon: 'el-icon-date'
        },
        children: [
          {
            path: '/demo/fx-table/list',
            name: 'FxTableList',
            component: () => import('@/views/demo/FxTable/ListPage.vue'),
            meta: {
              title: 'FxTable 列表页',
              icon: 'el-icon-s-grid',
            }
          },
          {
            path: '/demo/fx-table/form',
            name: 'FxTableForm',
            component: () => import('@/views/demo/FxTable/FormPage.vue'),
            meta: {
              title: 'FxTable 表单页',
              icon: 'el-icon-s-order',
            }
          }
        ]
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
