import HomeView from '@/views/home/index.vue'
import CartView from '@/views/cart/index.vue'

import DefaultLayout from '@/layouts/DefaultLayout.vue';

// middleware
import AuthMiddleware from '@/middleware/auth.middleware.js';

export default [{
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home',
      layout: DefaultLayout,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
    meta: {
      title: 'Cart',
      layout: DefaultLayout,
      middleware: [AuthMiddleware],
    },
  },
  // {
  //   path: '/user/create',
  //   name: 'user.create',
  //   component: UserCreateView,
  //   meta: {
  //     title: 'User Create',
  //     layout: DefaultLayout,
  //     middleware: [AuthMiddleware],
  //   },
  // },
  // {
  //   path: '/user/update',
  //   name: 'user.update',
  //   component: UserUpdateView,
  //   meta: {
  //     title: 'User Update',
  //     layout: DefaultLayout,
  //     middleware: [AuthMiddleware],
  //   },
  // }
]
