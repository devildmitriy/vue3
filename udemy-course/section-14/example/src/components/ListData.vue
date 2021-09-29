<template>
    <transition-group tag="ul" name="list-data">
      <li v-for="user in users" :key="user" @click="removeUser(user)">
        {{ user }}
      </li>
    </transition-group>
  <div>
    <input type="text" name="userName" id="userName" v-model="userName" />
    <button @click="addUser">Add user</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Manu', 'Julie'],
      userName: ''
    };
  },
  methods: {
    addUser() {
      this.users.unshift(this.userName);
      this.userName = '';
    },
    removeUser(name) {
      this.users = this.users.filter(userName => userName != name);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.list-data-enter-from {
    opacity: 0;
    transform: translateY(-30px);
}

.list-data-enter-active {
    transition: all .5s ease-out;
}

.list-data-enter-to {
    opacity: 1;
    transform: translateX(0);
}

.list-data-leave-from {
    opacity: 1;
    transform: translatex(0);
}

.list-data-leave-active {
    transition: all .5s ease-out;
    position: absolute;
}

.list-data-leave-to {
    opacity: 0;
    transform: translateX(50px);
}

.list-data-move {
    transition: transform .8s ease-out;
}
.list-data-remove {
    transition: transform 2s ease;
}

</style>
