import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/daily01',
    name: 'daily01',
    component: () => import(/* webpackChunkName: "about" */ '../views/Daily01.vue'),
  },
  {
    path: '/daily07',
    name: 'daily07',
    component: () => import(/* webpackChunkName: "about" */ '../views/Daily07.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
