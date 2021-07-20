<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div>{{ count }}</div>
  <VCount @add="addCount" />
  <VInputText v-model="text" />
  <VInputCheckbox v-model="checkbox" />
  <button @click="check">проверить</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import VCount from "./components/VCount.vue";
import VInputText from "./components/VInputText";
import VInputCheckbox from "./components/VInputCheckbox";

export default {
  name: "App",
  components: {
    HelloWorld,
    VCount,
    VInputText,
    VInputCheckbox,
  },
  data() {
    return {
      count: 0,
      text: "text",
      checkbox: false,
    };
  },
  methods: {
    addCount(e, e2) {
      console.log(e, e2);
      this.count++;
    },
    check() {
      console.log(this.text);
      console.log(this.checkbox);
    },
  },
};
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
