<template>
    <div>
        <p>{{dialogue[currentLine]}}</p>
    </div>
</template>
<script>
export default {
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
    mounted() {
      /* setInterval(() => {
        this.randomLine()
      }, 2000)*/
    },
    methods: {
      randomLine: function() {
        this.currentLine = Math.floor((Math.random() * ((this.dialogue.length-1) - 1 + 1)) + 1 )
        console.log(this.currentLine)
      }
    }
}
</script>

