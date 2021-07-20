<template>
  <div class="control_form--status">
    <span v-if="allTodosCount > 0">Всего задач: {{ allTodosCount }}.</span>
    <span v-else>Список пуст</span>

    <span v-if="isAllTasks"> Выполнено задач:{{ taskCompleted }}. </span>
    <span v-else-if="taskCompleted > 0 && taskCompleted == allTodosCount">
      Все задачи выполнены
    </span>
  </div>
</template>

<script>
export default {
  props: {
    allTodosCount: Number,
    isAllTasks: Boolean,
    taskCompleted: Number,
  },
};
</script>

<style>
</style>