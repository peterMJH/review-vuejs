<template>
  <div>
    <button v-on:click="increase">{{count}}</button>

  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  props: {
    
  },
  methods: {
    increase: function() {
      this.count++
      this.$emit('totalIncrease')
    }
  }
}
</script>