<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <ul>
      <li
        v-for="(todo, idx) in todos"
        :key="idx"
        :class="{ lineThrough: todo.complete }"
      >
        <span>{{ idx + 1 }}. {{ todo.label }}</span>
        <input type="checkbox" v-model="todo.complete" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      todos: [
        { label: "item1", complete: true },
        { label: "item2", complete: false },
        { label: "item3", complete: false },
        { label: "item4", complete: false },
      ],
    };
  },
  components: {},
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

ul {
  list-style-type: none;
}

.lineThrough {
  text-decoration: line-through;
}
</style>
