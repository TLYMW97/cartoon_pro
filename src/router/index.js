import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { hideHeader: false },
    component: () => import('../views/index/index.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    meta: { hideHeader: false },
    component: () => import('../views/cartoon-detail/cartoon-detail')
  },
  {
    path: '/cardform',
    name: 'Cardform',
    meta: { hideHeader: false },
    component: () => import('../views/card-form/card-form')
  },
  {
    path: '/login',
    name: 'Login',
    meta: { hideHeader: false },
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/cartoonview',
    name: 'CartoonView',
    meta: { hideHeader: true },
    component: () => import('../views/cartoon-view/cartoon-view')
  },
  {
    path: '/cartoonlist',
    name: 'CartoonList',
    meta: { hideHeader: false },
    component: () => import('../views/cartoon-list/cartoon-list')
  },
  {
    path: '/authorlogin',
    name: 'AuthorLogin',
    meta: { hideHeader: true },
    component: () => import('../views/author-system/login/login')
  }, 
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/search-result/search-result')
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
