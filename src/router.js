import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const vuejsMenu = [

  {
    path: '/lifecycle',
    name: 'LifeCycle',
    component: () => import(/* webpackChunkName: "lifecycle" */'./views/LifeCycle.vue')
  },
  {
    path: '/templategrammer',
    name: 'Template Grammer',
    component: () => import(/* webpackChunkName: "templategrammer" */'./views/TemplateGrammer.vue')
  },
  {
    path: '/computedandwatch',
    name: 'Computed & Watch',
    component: () => import(/* webpackChunkName: "computedandwatch" */'./views/ComputedAndWatch.vue')
  },
  {
    path: '/component',
    name: 'Component',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "component" */ './views/Component.vue')
  },

  {
    path: '/slot',
    name: 'Slot',
    component: () => import(/* slot: "computedandwatch" */'./views/Slot.vue')
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import(/* slot: "computedandwatch" */'./views/Vuex.vue')
  }
]

export const componentsMenu = [
  {
    path: '/table',
    name: 'Table',
    component: () => import(/* webpackChunkName: "Table" */'./views/Table.vue')
  },
  {
    path: '/chart',
    name: 'Chart',
    component: () => import(/* webpackChunkName: "Chart" */'./views/Chart.vue')
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: vuejsMenu.concat(componentsMenu)
})
