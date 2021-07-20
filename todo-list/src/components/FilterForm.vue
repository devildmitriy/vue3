<template>
  <div class="control_form--filter" v-if="allTodosCount > 0">
    <div>
      <label>Поиск:</label>
      <input
        type="text"
        :value="changeFilter"
        @input="$emit('update:changeFilter', $event.target.value)"
      />
    </div>
    <div v-if="taskCompleted > 0">
      <label>Скрыть выполененые задачи</label>
      <input
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    allTodosCount: Number,
    taskCompleted: Number,
    modelValue: Boolean,
    changeFilter: String,
  },
  emits: ["update:modelValue", "update:changeFilter"],
};
</script>

<style>
</style>