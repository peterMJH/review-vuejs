<template>
  <div class="about">
    <div>
      <h2>v-once</h2>
      <v-text-field
        v-model="vOnce"
        label="Test value"
      ></v-text-field>
      <ul>
        <p> normal: {{this.vOnce}}</p>
        <p v-once> apply: {{this.vOnce}}</p>
      </ul>
      <h2>v-html</h2>
      <ul>
        <p> normal: {{this.vHtml}}</p>
        <p> apply: <span v-html="vHtml"></span></p>
      </ul>
      <h2>v-bind</h2>
      <ul>
        <div v-bind:class="{ active: isActive }" v-bind:style="bindStyle">
          class, style binding
        </div>
      </ul>
      <h2>v-on</h2>
      
      Event handling
      
      <ul>
        <div @click="func1" style="background: red; padding: 10px;">first
          <div @click="func2" style="background: yellow; padding: 10px;">second
            <div @click="func3" style="background: green; padding: 10px;">
              third
            </div>
          </div>
        </div>
      </ul> 
      이벤트 수식어
      <ul>
        <li>
          .stop : 하위로 이벤트 전파를 중지
        </li>
        <li>
          .self : 직접 이벤트 실행 시에만 발생
        </li>
        <li>
          .prevent : Default Event 태그의 해당 이벤트를 무효화 처리
        </li>
        <li>
          .capture : 해당 이벤트 가장 먼저 발생
        </li>
        <li>
          .once : 해당 이벤트를 처음 한번만 실행
        </li>
        <li>
          .passive :
        </li>
        <li>
          .exact : 이벤트가 실행되기 위한 정확한 조합시에만 실행(ex:)
        </li>
        <li>
          keyup : [.enter, .tab, .delete (“Delete” 와 “Backspace” 키 모두를 캡처), .esc, .space, .up, .down, .left, .right]
        </li>
      </ul>     
      <h2>v-if</h2>
      <ul>
        <template v-if="vIfType">
          <v-text-field
            v-model="vIfValue"
            label="IF"
          ></v-text-field>
        </template>
        <template v-else>
          <v-text-field
            v-model="vIfValue"
            label="ELSE"
          ></v-text-field>
        </template> 
        <v-btn color="info" depressed small v-on:click="changeType">change type</v-btn>
      </ul>
      <h2>v-show</h2>
      <ul>
        렌더링 되고 DOM에 남아있음(display css)
      </ul>
      <h2>v-for</h2>
      <ul> <!-- 우선순위 v-for > v-if -->
        {{items}}
        <li v-for="(item, index) in items" v-bind:key="index">
          <ul>{{item.name}}</ul>
        </li>
      </ul>
      <h2>v-model</h2>
      <ul>
        Two-way binding
      </ul>
    </div>
    
  </div>

</template>
<script>
export default {
  data: () => ({
    vOnce: 'VueJS',
    vHtml: '<font color="red">Hello World</font>',
    isActive: true,
    bindStyle: {
      'background-color': 'yellow'
    },
    vIfType: true,
    vIfValue: null,
    items: [
      { name: 'peter'},
      { name: 'alie'}
    ]
  }),
  methods: {
    changeType: function() {
      this.vIfType = !this.vIfType
    },
    func1: function () {
      alert('first')
    },
    func2: function () {
      alert('second')
    },
    func3: function () {
      alert('third')
    }
  }
}
</script>
