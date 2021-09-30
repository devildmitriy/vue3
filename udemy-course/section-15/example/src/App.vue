<template>
  <base-container title="Vuex" v-if="isLogin">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add one</button>
    <change-counter></change-counter>
  </base-container>
  <base-container>
  <user-auth title="Auth"></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import TheCounter from './components/TheCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
import {mapGetters} from 'vuex'

export default {
  components: {
    BaseContainer,
    FavoriteValue,
    TheCounter,
    ChangeCounter,
    UserAuth
  },
  computed: {
    ...mapGetters(['isLogin'])
  },
  methods: {
    addOne() {
      // this.$store.commit('increase',{value:10})
      this.$store.dispatch({
        type: 'increase',
        value: 10
      });
    },
    
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
