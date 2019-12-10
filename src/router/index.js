import Vue from 'vue';
import VueRouter from 'vue-router';
import Root from '../views/Root.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'root',
    component: Root
  },
  {
    path: '/teams',
    name: 'teams',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "teams" */ '../views/Teams.vue')
  },
  {
    path: '/tools',
    name: 'tools',
    component: () => import(/* webpackChunkName: "tools" */ '../views/Tools.vue')
  },
  {
    path: '/knowledge',
    name: 'knowledge',
    component: () => import(/* webpackChunkName: "knowledge" */ '../views/Knowledge.vue')
  },
  {
    path: '/help',
    name: 'help',
    component: () => import(/* webpackChunkName: "help" */ '../views/Help.vue')
  },
  {
    path: '/admin-login',
    name: 'admin-login',
    component: () => import(/* webpackChunkName: "admin-login" */ '../views/AdminLogin.vue')
  },
  {
    path: '/survey',
    name: 'survey',
    component: () => import(/* webpackChunkName: "survey" */ '../views/Survey.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue')
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    //https://router.vuejs.org/guide/advanced/scroll-behavior.html
    if (to.hash) {
      return { selector: to.hash };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
