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
        <v-list-tile v-for="(item, index) in items" v-bind:key="index" :to="{path: item.path}">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>REVIEW VueJS</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-for="item in category" v-bind:key="item.key">
        <v-btn flat @click="changeCategory(item.key)">{{item.name}}</v-btn>
      </v-toolbar-items>
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
  created() {
    this.changeCategory('vuejs')
  },
  mounted() {
    this.items = this.$store.getters.getMenu
  },
  data: () => ({
    dialog: false,
    drawer: null,
    items: [],
    category: [
      { key: 'vuejs', name: 'Review VueJS'},
      { key: 'components', name: 'Components'},
    ]
  }),
  props: {
    source: String
  },
  methods: {
    changeCategory(key) {
      this.$store.dispatch('changeCategory', key)
      this.items = this.$store.getters.getMenu
    }
  }
}
</script>
