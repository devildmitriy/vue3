<template>
  <input
    type="checkbox"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
  />
  <!-- @change="change"/> -->
</template>

<script>
export default {
  props: ["modelValue"],
  //emits:['update:modelValue'],
  //   methods: {
  //     change(e) {
  //       console.log(e, e.target.checked);
  //        this.$emit('update:modelValue',e.target.checked)
  //     },
  //   },
};
</script>

<style>
</style>