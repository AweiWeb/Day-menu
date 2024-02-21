import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/layout/index.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: () => import('@/views/Home/index.vue')
        },
        {
          path: '/order',
          component: () => import('@/views/Order/index.vue')
        },
        {
          path: '/recommend',
          component: () => import('@/views/Recommend/index.vue')
        },
        {
          path: '/turntable',
          component: () => import('@/views/Turntable/index.vue')
        },
        {
          path: '/shoppingCart',
          component: () => import('@/views/ShoppingCart/index.vue')
        },
        {
          path: '/menu/:id',
          component: () => import('@/views/MenuList/index.vue')
        }
      ]
    },
    {
      path: '/room',
      component: () => import('@/views/Room/index.vue')
    },
    {
      path: '/room/:id',
      component: () => import('@/views/Room/roomhome.vue')
    },
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue')
    }
  ]
})

export default router
