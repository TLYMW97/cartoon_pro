import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/index/index.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/cartoon-detail/cartoon-detail')
  },
  {
    path: '/cardform',
    name: 'Cardform',
    component: () => import('../views/card-form/card-form')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/cartoonview',
    name: 'CartoonView',
    component: () => import('../views/cartoon-view/cartoon-view')
  },
  {
    path: '/cartoonlist',
    name: 'CartoonList',
    component: () => import('../views/cartoon-list/cartoon-list')
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  routes
});

export default router;
