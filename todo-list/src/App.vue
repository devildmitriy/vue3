<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="control_form">
      <AddForm @addTodo="addTodo" />
      <StatusForm
        :allTodosCount="todos.length"
        :isAllTasks="isAllTasks"
        :taskCompleted="taskCompleted"
      />
      <FilterForm
        :allTodosCount="todos.length"
        :taskCompleted="taskCompleted"
        v-model="isHide"
        v-model:changeFilter="inputFilter"
      />
    </div>
    <ul>
      <TodoItem
        v-for="(todo, idx) in shownTodos"
        :key="todo.id"
        :todo="{ ...todo, idx: idx }"
        v-model="todo.complete"
        @del="delItem"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";
import AddForm from "./components/AddForm.vue";
import StatusForm from "./components/StatusForm.vue";
import FilterForm from "./components/FilterForm.vue";
export default {
  name: "App",
  components: { TodoItem, AddForm, StatusForm, FilterForm },
  data() {
    return {
      todos: [
        { label: "item1", complete: true, id: 1 },
        { label: "item2", complete: false, id: 2 },
        { label: "item3", complete: false, id: 3 },
        { label: "item4", complete: false, id: 4 },
      ],
      inputFilter: "",
      isHide: false,
    };
  },
  methods: {
    addTodo(inputText) {
      if (inputText.length > 0) {
        this.todos.push({
          label: inputText,
          complete: false,
          id: Date.now(),
        });
      }
    },
    delItem(id) {
      this.todos = this.todos.filter((item) => item.id !== id);
    },
  },
  computed: {
    shownTodos() {
      let result;
      if (this.isHide) {
        result = this.todos.filter((item) => !item.complete);
      } else {
        result = this.todos;
      }
      if (this.inputFilter) {
        result = result.filter(({ label }) =>
          label.toLowerCase().includes(this.inputFilter.toLowerCase())
        );
      }

      return result;
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
  watch: {
    inputFilter(nw, old) {
      console.log(`change input: old - ${old}, new - ${nw}`);
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
</style>
