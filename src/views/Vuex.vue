<template>
  <div class="slot">
    <h1>{{count}}</h1>
    <button @click="$store.dispatch('increaseAsync')">button</button>   
  </div>
</template>
<script>
export default {
  data() {
    return {
      id : 0
    }
  },
  computed: {
    count() {
      return this.$store.getters.toStringCount
    }
  },
}
</script>

