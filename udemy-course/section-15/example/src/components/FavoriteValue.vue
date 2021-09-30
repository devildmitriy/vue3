<template>
  <h2>{{ counter }}</h2>
  <p>we do more...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.normalizeCounter;
    }
  }
};
</script>

<style></style>
