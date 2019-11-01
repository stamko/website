import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/functions',
      name: 'functions',
      component: () => import('./views/Horizontal-home.vue')
    },
    {
      path: '/price',
      name: 'price',
      component: () => import('./views/price/Price.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('./views/blog/Blog.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/posts/:cid',
      name: 'posts',
      props: true,
      component: () => import('./views/posts/PostsByRubric.vue')
    },
    {
      path: '/docs/',
      name: 'docs',
      component: () => import('./views/docs/Docs.vue')
    },
    {
      path: '/docs/:did',
      name: 'doc',
      props: true,
      component: () => import('./views/docs/DocPage.vue')
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import('./views/blog/Videos.vue')
    },
    {
      path: '/post/:pid',
      name: 'post',
      props: true,
      component: () => import('./views/posts/Post.vue')
    },
    {
      path: '/rubrics',
      name: 'rubrics',
      component: () => import('./views/blog/CategoriesList.vue')
    },
  ]
})
