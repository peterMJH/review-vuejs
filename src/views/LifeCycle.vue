<template>
  <div class="about">
    <v-btn color="success" depressed small v-on:click="changeValue">click=>{{this.value}}</v-btn>
    : Call beforeUpdate, updateed
    <v-img
      :src="require('../assets/vuejs-lifeCycle.png')"
      contain
      height="800"
    ></v-img>

  </div>

</template>
<script>
export default {
  data: () => ({
    value: false,
    count: 0,
    log: []
  }),
  methods: {
    changeValue: function () {
      this.value = !this.value
    }
  },
  beforeCreate: function () {
    // Vue 인스턴스가 생성된 직후에 실행되는 훅
    // 아직 데이터와 이벤트가 생성되지 않아 접근할 수 없는 단계
    console.log('beforeCreate', this.count)
    
  },
  created: function () {
    // 데이터, 이벤트에 접근 가능
    // 아직 vitual DOM이 생성되지 않은 상태
    // 초기 데이터를 패치

    console.log('created', this.count)
    this.log.push('created')
  },
  beforeMount: function () {
    // el에 접근할 수 없는 단계
    console.log('beforeMount', this.$el)
    this.log.push('beforeMount')
  },
  mounted: function () {
    // el을 포함한 모든 컴포넌트에 접근가능
    console.log('mounted', this.$el)
    this.log.push('mounted')
  },
  beforeUpdate: function () {
    // data가 업데이트되어 DOM을 re-render 시키기 전에 실행
    console.log('beforeUpdate')
  },
  updated: function () {
    // data가 업데이트되어 DOM을 re-render 된 후, 실행
    console.log('updated')
  },
  beforeDestroy: function () {
    // 바인딩 된 이벤트를 제거해야할 때
    console.log('beforeDestroy')
  },
  destroyed: function () {
    console.log('destroyed')
  }
}
</script>
