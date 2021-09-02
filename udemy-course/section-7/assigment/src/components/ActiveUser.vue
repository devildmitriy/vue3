<template>
  <section>
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
  </section>
</template>

<script>
export default {
  emits: ["delete"],
  props: {
    user: {
      name: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
    },
  },
};
</script>

<style></style>
