<template>
  <div>
    <blabber v-bind:msg="dialogue[currentLine]"></blabber>
    <blabber v-bind:msg="dialogue[currentLine]"></blabber>
  </div>
</template>
<script>
import Blabber from '../components/Blabber'

  export default {
    components: {
      Blabber
    },
    data() {
      return {
        currentLine: 0,
        dialogue: [
          'hello',
          'how are you',
          'fine thanks',
          'let`s go drink'
        ]
      }
    },

  }

</script>
