<template>
  <div>
    <span :class="{ lineThrough: modelValue }">
      {{ todo.idx + 1 }}. {{ todo.label }}
    </span>
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <button @click="del(todo.id)">X</button>
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
    modelValue: Boolean,
  },
  emits: ["del", "update:modelValue"],
  methods: {
    del(id) {
      this.$emit("del", id);
    },
  },
};
</script>

<style scoped>
.lineThrough {
  text-decoration: line-through;
}
</style>