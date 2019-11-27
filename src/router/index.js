import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/index/index.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/cartoon-detail/cartoon-detail')
  },
  {
    path: '/cardform',
    name: 'cardform',
    component: () => import('../views/card-form/card-form')
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
