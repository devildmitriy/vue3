<template>
  <h2>{{ finalCounter }}</h2>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // }
    ...mapGetters(['finalCounter'])
  }
};
</script>

<style></style>
