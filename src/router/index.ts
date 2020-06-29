import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { HomePage } from '../pages';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
