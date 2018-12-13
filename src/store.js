import Vue from 'vue'
import Vuex from 'vuex'
import { vuejsMenu, componentsMenu } from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    category: [
      { key: 'vuejs', name: 'Review VueJS'},
      { key: 'components', name: 'Components'}
    ],
    menu: [],
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  mutations: {
    increase(state) {
      state.count++
    },
    setMenu(state, key) {
      if(key === 'vuejs') {
        state.menu = vuejsMenu
      }
      else if(key === 'components') {
        state.menu = componentsMenu
      }
    } 
  },
  actions: {
    increaseAsync({commit}) {
      setInterval(() => {
        commit('increase')
      }, 1000)
    },
    changeCategory({commit}, key) {
      commit('setMenu', key)
    }
  },
  getters: {
    getCategory: (state) => {
      return state.category.name
    },
    getMenu: state => {
      let menuList = []
      state.menu.forEach(item => {
        menuList.push({
          name: item.name,
          path: item.path
        })
      })
      return menuList
    },
    toStringCount: state => {
      return 'count : ' + state.count
    },
    methodsType: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  }
})
