<template>
  <div>
    <span>{{ todo.idx + 1 }}. {{ todo.label }}</span>
    <input type="checkbox" v-model="todo.complete" />
    <button @click="cnsl()">X</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      label: String,
      idx: Number,
      id: Number,
      complete: Boolean,
    },
  },
  methods: {
    cnsl() {
      console.log("kek", this.todo);
    },
  },
};
</script>

<style>
</style>