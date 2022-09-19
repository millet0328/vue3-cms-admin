import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/components/Layout.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/login',
      name: 'Login',
      component: () => import('@/views/Admin/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/Admin/Register.vue')
    },
    {
      path: '/article',
      name: 'Article',
      component: Layout,
      meta: { requiresAuth: true },
      children: [{
        path: 'list',
        name: 'ArticleList',
        component: () => import('@/views/Article/List.vue')
      }, {
        path: 'release',
        name: 'ArticleRelease',
        component: () => import('@/views/Article/Release.vue')
      }, {
        path: 'edit/:id',
        name: 'ArticleEdit',
        props: true,
        component: () => import('@/views/Article/Edit.vue')
      }]
    }, {
      path: '/comment',
      name: 'Comment',
      component: Layout,
      meta: { requiresAuth: true },
      children: [{
        path: 'list',
        name: 'CommentList',
        component: () => import('@/views/Comment/List.vue')
      }]
    }, {
      path: '/category',
      name: 'Category',
      component: Layout,
      meta: { requiresAuth: true },
      children: [{
        path: 'list',
        name: 'CategoryList',
        component: () => import('@/views/Category/List.vue')
      }]
    }, {
      path: '/tag',
      name: 'Tag',
      component: Layout,
      meta: { requiresAuth: true },
      children: [{
        path: 'list',
        name: 'TagList',
        component: () => import('@/views/Tag/List.vue')
      }]
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Layout,
      meta: { requiresAuth: true },
      children: [{
        path: 'list',
        name: 'NoticeList',
        component: () => import('@/views/Notice/List.vue')
      }, {
        path: 'release',
        name: 'NoticeRelease',
        component: () => import('@/views/Notice/Release.vue')
      }, {
        path: 'edit/:id',
        name: 'NoticeEdit',
        props: true,
        component: () => import('@/views/Notice/Edit.vue')
      }]
    }, {
      path: '/user',
      name: 'User',
      component: Layout,
      meta: { requiresAuth: true },
      children: [{
        path: 'list',
        name: 'UserList',
        component: () => import('@/views/User/List.vue')
      }]
    }, {
      path: '/slide',
      name: 'Slide',
      component: Layout,
      meta: { requiresAuth: true },
      children: [{
        path: 'list',
        name: 'SlideList',
        component: () => import('@/views/Slide/List.vue')
      }]
    },
    {
      path: '/link',
      name: 'Link',
      component: Layout,
      meta: { requiresAuth: true },
      children: [{
        path: 'list',
        name: 'LinkList',
        component: () => import('@/views/Link/List.vue')
      }]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Layout,
      meta: { requiresAuth: true },
      children: [{
        path: 'list',
        name: 'AdminList',
        component: () => import('@/views/Admin/List.vue')
      }, {
        path: 'info',
        name: 'AdminInfo',
        component: () => import('@/views/Admin/Info.vue')
      }, {
        path: 'edit/:id',
        name: 'AdminEdit',
        props: true,
        component: () => import('@/views/Admin/Edit.vue')
      }]
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Layout,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'role',
          name: 'AuthRole',
          component: () => import('@/views/Auth/Role.vue')
        },
      ]
    }
  ]
})

export default router
