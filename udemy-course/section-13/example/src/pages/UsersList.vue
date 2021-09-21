<template>
  <button @click="confirmInput">Confirm</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('UserList cmp BeforeEnter');
    next();
  },
  beforeRouterLeave(to,from,next) {
    console.log('beforeRouterLeave',to,from)
    next()// someLogic
  },
  unmounted() {
    console.log('unmounted')
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
