<template>
  <button @click="increment">Add one</button>
  <button @click="increase({value:10})">Add 10</button>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  methods: {
    // addOne() {
    //   this.$store.commit('increment');
    // }
    ...mapActions(['increment','increase'])
  }
};
</script>

<style></style>
