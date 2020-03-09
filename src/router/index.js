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
  },
  {
    path: '/authorindex',
    name: 'AuthorIndex',
    redirect: '/home',
    meta: { hideHeader: true },
    component: () => import('../views/author-system/index/index'),
    children: [
      {
        path: '/home',
        name: 'home',
        meta: { hideHeader: true },
        component: () => import('../views/author-system/home/home')
      },
      {
        path: '/publish',
        name: 'publish',
        meta: { hideHeader: true },
        component: () => import('../views/author-system/publish/publish')
      },
      {
        path:'/review',
        name: 'review',
        meta: { hideHeader: true },
        component: () => import('../views/author-system/review/review')

      },
      {
        path:'/mycartoon',
        name: 'mycartoon',
        meta: { hideHeader: true },
        component: () => import('../views/author-system/my-cartoon/my-cartoon')
      },
    ],
  },
  {
    path:'/homeedit',
    name: 'homeedit',
    redirect: '/cartoonedit',
    meta: { hideHeader: true },
    component: ()=> import('../views/author-system/cartoon-edit/home-edit'),
    children: [
      {
        path:'/cartoonedit',
        name:'cartoonedit',
        meta: { hideHeader: true },
        component: ()=> import('../views/author-system/cartoon-edit/cartoon-edit')
      },
      {
        path: '/chapteredit',
        name: 'chapetredit',
        meta: { hideHeader: true },
        component: () => import('../views/author-system/cartoon-edit/chapter-edit')
      },
      {
        path: '/commentedit',
        name: 'commentedit',
        meta: { hideHeader: true },
        component: () => import('../views/author-system/cartoon-edit/comment-edit')
      },
      {
        path:'/publishform',
        name: 'publishform',
        meta: { hideHeader: true },
        component: () => import('../views/author-system/publish/publish-form')
      },
      {
        path:'/publishchapter',
        name: 'publishchapter',
        meta: { hideHeader: true },
        component: () => import('../views/author-system/publish/publish-chapter')
      },
      {
        path:'/publishimg',
        name: 'publishimg',
        meta: { hideHeader: true },
        component: () => import('../views/author-system/publish/publish-img')
      },
    ]
  },
  {
    path:'/adminindex',
    name:'adminindex',
    meta:{hideHeader: true},
    component: () => import('../views/admin-system/index'),
    children:[
      {
        path: 'review',
        name: 'review',
        meta: {hideHeader: true},
        component: () => import('../views/admin-system/review-manga/review-manga'),
      }
    ]
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
