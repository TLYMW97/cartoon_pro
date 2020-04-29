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
    path: '/personal',
    name: 'Personal',
    component: () => import('../views/personal/personal.vue')
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
    path: '/pay',
    name: 'Pay',
    component: () => import('../views/pay-page/page-page.vue')
  },
  {
    path: '/applyText',
    components: () => import('../views/apply-text/apply-text.vue')
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
        redirect: '/publish/publishForm',
        meta: { hideHeader: true },
        component: () => import('../views/author-system/publish/publish'),
        children: [
          {
            path: 'publishForm',
            name: 'publishForm',
            meta: { hideHeader: true },
            component: () =>
              import('../views/author-system/publish/publish-form')
          },
          {
            path: 'publishImg',
            name: 'publishImg',
            meta: { hideHeader: true },
            component: () =>
              import('../views/author-system/publish/publish-img')
          },
          {
            path: 'publishChapter',
            name: 'publishChapter',
            meta: { hideHeader: true },
            component: () =>
              import('../views/author-system/publish/publish-chapter')
          },
          {
            path: 'finish',
            name: 'finish',
            meta: { hideHeader: true },
            component: () => import('../views/author-system/publish/finish')
          }
        ]
      },
      {
        path: '/review',
        name: 'review',
        meta: { hideHeader: true },
        component: () => import('../views/author-system/review/review')
      },
      {
        path: '/mycartoon',
        name: 'mycartoon',
        meta: { hideHeader: true },
        component: () => import('../views/author-system/my-cartoon/my-cartoon')
      }
    ]
  },
  {
    path: '/homeedit',
    name: 'homeedit',
    redirect: '/cartoonedit',
    meta: { hideHeader: true },
    component: () => import('../views/author-system/cartoon-edit/home-edit'),
    children: [
      {
        path: '/cartoonedit',
        name: 'cartoonedit',
        meta: { hideHeader: true },
        component: () =>
          import('../views/author-system/cartoon-edit/cartoon-edit')
      },
      {
        path: '/chapteredit',
        name: 'chapetredit',
        meta: { hideHeader: true },
        component: () =>
          import('../views/author-system/cartoon-edit/chapter-edit')
      },
      {
        path: '/commentedit',
        name: 'commentedit',
        meta: { hideHeader: true },
        component: () =>
          import('../views/author-system/cartoon-edit/comment-edit')
      },
      {
        path: '/publishform',
        name: 'publishform',
        meta: { hideHeader: true },
        component: () => import('../views/author-system/publish/publish-form')
      },
      {
        path: '/publishchapter',
        name: 'publishchapter',
        meta: { hideHeader: true },
        component: () =>
          import('../views/author-system/publish/publish-chapter')
      },
      {
        path: '/publishimg',
        name: 'publishimg',
        meta: { hideHeader: true },
        component: () => import('../views/author-system/publish/publish-img')
      }
    ]
  },
  {
    path: '/adminindex',
    name: 'adminindex',
    redirect: '/adminlogin',
    meta: { hideHeader: true },
    component: () => import('../views/admin-system/index'),
    children: [
      {
        path: 'manga',
        name: 'manga',
        meta: { hideHeader: true },
        component: () => import('../views/admin-system/manga/manga')
      },
      {
        path: 'chapter',
        name:'chapter',
        meta:{hideHeader: true},
        component: () => import('../views/admin-system/chapter/chapter')
      },
      {
        path: 'comments',
        name: 'comments',
        meta: { hideHeader: true },
        component: () => import('../views/admin-system/comments/comments')
      },
      {
        path: 'dataStatistics',
        name: 'dataStatistics',
        meta: { hideHeader: true },
        component: () =>
          import('../views/admin-system/data-statistics/data-statistics')
      },
      {
        path: 'user',
        name: 'user',
        meta: { hideHeader: true },
        component: () => import('../views/admin-system/user/user')
      }
    ]
  },
  {
    path:'/adminlogin',
    name:'adminlogin',
    meta: { hideHeader: true },
    component: () => import('../views/admin-system/login/login')
  },
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
