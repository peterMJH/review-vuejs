import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: () => import(/* webpackChunkName: "lifecycle" */'./views/LifeCycle.vue')
    },
    {
      path: '/templategrammer',
      name: 'templategrammer',
      component: () => import(/* webpackChunkName: "templategrammer" */'./views/TemplateGrammer.vue')
    },
    {
      path: '/computedandwatch',
      name: 'computedandwatch',
      component: () => import(/* webpackChunkName: "computedandwatch" */'./views/ComputedAndWatch.vue')
    },
    {
      path: '/component',
      name: 'component',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "component" */ './views/Component.vue')
    },
    {
      path: '/slot',
      name: 'slot',
      component: () => import(/* slot: "computedandwatch" */'./views/Slot.vue')
    },
  ]
})
