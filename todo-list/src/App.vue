<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="control_form">
      <div class="control_form--add">
        <input type="text" v-model="inputText" @keypress.enter="addTodo" />
        <button @click="addTodo">Добавить</button>
      </div>
      <div class="control_form--status">
        <span v-if="todos.length > 0">Всего задач: {{ todos.length }}.</span>
        <span v-else>Список пуст</span>

        <span v-if="isAllTasks"> Выполнено задач:{{ taskCompleted }}. </span>
        <span v-else-if="taskCompleted > 0 && taskCompleted == todos.length">
          Все задачи выполнены
        </span>
      </div>
      <div class="control_form--filter">
        <div>
          <label>Скрыть выполененые задачи</label>
          <input type="checkbox" v-model="isHide" />
        </div>
      </div>
    </div>
    <ul>
      <li
        v-for="(todo, idx) in shownTodos"
        :key="todo.id"
        :class="{ lineThrough: todo.complete }"
      >
        <span>{{ idx + 1 }}. {{ todo.label }}</span>
        <input type="checkbox" v-model="todo.complete" />
        <button @click="delItem(todo.id)">X</button>
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
        { label: "item1", complete: true, id: 1 },
        { label: "item2", complete: false, id: 2 },
        { label: "item3", complete: false, id: 3 },
        { label: "item4", complete: false, id: 4 },
      ],
      inputText: "",
      isHide: false,
    };
  },
  methods: {
    addTodo() {
      if (this.inputText.length > 2) {
        this.todos.push({
          label: this.inputText,
          complete: false,
          id: Date.now(),
        });
        this.inputText = "";
      }
    },
    delItem(id) {
      this.todos = this.todos.filter((item) => item.id !== id);
    },
  },
  components: {},
  computed: {
    shownTodos() {
      if (this.isHide) {
        return this.todos.filter((item) => !item.complete);
      } else {
        return this.todos;
      }
    },
    taskCompleted() {
      return this.todos.filter((item) => item.complete).length;
    },
    isAllTasks() {
      return this.taskCompleted > 0 && this.taskCompleted < this.todos.length;
    },
    isAllCompletedTasks() {
      return this.taskCompleted > 0 && this.taskCompleted == this.todos.length;
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

ul {
  list-style-type: none;
}

.lineThrough {
  text-decoration: line-through;
}
</style>
