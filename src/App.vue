<template>
<div id="app">
  <v-app id="inspire">
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile v-for="(item, index) in items" v-bind:key="index" :to="{path: item.route}">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>REVIEW VueJS</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2018 peterMJH</span>
    </v-footer>
  </v-app>
</div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { text: 'Life Cycle', route: '/lifecycle' }, 
      { text: 'Template Grammer', route: '/templategrammer' }, 
      { text: 'Computed & Watch', route: '/computedandwatch' }, 
      { text: 'Component', route: '/component' }, 
      { text: 'Slot', route: '/slot'  }, 
      { text: 'Vuex', route: '/'  }, 
    ]
  }),
  props: {
    source: String
  }
}
</script>
