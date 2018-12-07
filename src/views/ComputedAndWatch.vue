<template>
  <div class="about">
    <div>
      <h2>Computed</h2>
      <ul>
        <p> numbers: {{array}}</p>
        <p> computed SUM({{computedCallCount}}): {{sum}}</p>
      </ul>
      <v-btn color="success" depressed small v-on:click="pushArray">add number</v-btn>
      <h2>Watch</h2>
      <ul>
        <p> Call Watch value change: {{watchValue}}</p>
        <p> watch count: ({{watchCallCount}})</p>
      </ul>
      <v-btn color="info" depressed small v-on:click="changeValue">change value</v-btn>
    </div>
  </div>

</template>
<script>
export default {
  data: () => ({
    value: 'VueJS',
    array: [1,2,3,4,5],
    computedCallCount: 0,
    watchValue: 0,
    watchCallCount: 0
  }),
  computed: {
    // 계산해야 하는 목표 데이터를 정의
    // computed와 methods는 기능은 같지만 computed는 캐싱한다는 차이가 존재함.
    // 데이터가 자주 변동되지 않는다면 computed, 자주 업데이트 된다면 methods
    sum: function() {
      const result = this.array.reduce((accumulate, curVal) => {
        accumulate += curVal
        return accumulate
      })
      this.computedCallCount++
      return result
    }
  },
  watch: {
    // 감시할 데이터를 지정하고 그 데이터가 바뀌면 함수를 실행
    // computed는 내장 api를 사용하는 간단한 연산정도에 적합
    // watch는 데이터 호출과 같이 시간이 상대적으로 더 많이 소모되는 비동기 처리에 적합


    watchValue: function(value) {
      console.log('change watch value:', value)
      this.watchCallCount++
    }
  },
  methods: {
    pushArray: function() {
      this.array.push(this.getRandomNumber())
    },
    changeValue: function () {
      this.watchValue = this.getRandomNumber()
    },
    getRandomNumber: function() {
      // 1 ~ 50
      return Math.floor((Math.random() * (50 - 1 + 1)) + 1 )
    }
  }
}
</script>
