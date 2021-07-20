<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div>{{count}}</div>
  <VCount @add="addCount"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import VCount from './components/VCount.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,VCount
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addCount(e,e2) {
      console.log(e,e2)
      this.count++;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
