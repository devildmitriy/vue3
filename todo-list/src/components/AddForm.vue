<template>
  <div class="control_form--add">
    <input type="text" v-model.trim="inputText" @keypress.enter="addTodo" />
    <button @click="addTodo">
      <slot>Добавить</slot>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: "",
    };
  },
  emmits: ["addTodo"],
  methods: {
    addTodo() {
      this.$emit("addTodo", this.inputText);
      this.inputText = "";
    },
  },
};
</script>

<style>
</style>