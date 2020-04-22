import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/page-transition',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: 'about' */ '../views/PageTransition/PageTransition.vue'),
    children: [
      {
        path: '/',
        name: 'page-transition',
        meta: { transitionName: 'home' },
        component: () => import(/* webpackChunkName: 'home' */ '../views/PageTransition/PageTransitionHome.vue'),
      },
      {
        path: 'about',
        meta: { transitionName: 'about' },
        component: () => import(/* webpackChunkName: 'about' */ '../views/PageTransition/PageTransitionAbout.vue'),
      },
      {
        path: 'info',
        name: 'page-transition/info',
        meta: { transitionName: 'info' },
        component: () => import(/* webpackChunkName: 'about' */ '../views/Info.vue'),
      },
    ],
  },
  {
    path: '/showcase-draggable',
    component: () => import(/* webpackChunkName: 'about' */ '../views/ShowcaseDraggable/ShowcaseDraggable.vue'),
    children: [
      {
        path: '/',
        name: 'showcase-draggable',
        meta: { transitionName: 'home' },
        component: () => import(/* webpackChunkName: 'home' */ '../views/ShowcaseDraggable/ShowcaseDraggableHome.vue'),
      },
      {
        path: 'info',
        name: 'showcase-draggable/info',
        meta: { transitionName: 'info' },
        component: () => import(/* webpackChunkName: 'about' */ '../views/Info.vue'),
      },
    ],
  },
  {
    path: '/blend-cursor-hover',
    component: () => import(/* webpackChunkName: 'about' */ '../views/BlendCursorHover/BlendCursorHover.vue'),
    children: [
      {
        path: '/',
        name: 'blend-cursor-hover',
        meta: { transitionName: 'home' },
        component: () => import(/* webpackChunkName: 'home' */ '../views/BlendCursorHover/BlendCursorHoverHome.vue'),
      },
      {
        path: 'info',
        name: 'blend-cursor-hover/info',
        meta: { transitionName: 'info' },
        component: () => import(/* webpackChunkName: 'about' */ '../views/Info.vue'),
      },
    ],
  },
  {
    path: '/scroll-animation',
    component: () => import(/* webpackChunkName: 'about' */ '../views/ScrollAnimation/ScrollAnimation.vue'),
    children: [
      {
        path: '/',
        name: 'scroll-animation',
        meta: { transitionName: 'home' },
        component: () => import(/* webpackChunkName: 'home' */ '../views/ScrollAnimation/ScrollAnimationHome.vue'),
      },
      {
        path: 'info',
        name: 'scroll-animation/info',
        meta: { transitionName: 'info' },
        component: () => import(/* webpackChunkName: 'about' */ '../views/Info.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
