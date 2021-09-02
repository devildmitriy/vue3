<template>
  <section>
    <header>
      <h1>Active user</h1>
    </header>
    <user-data @change-user="changeUser"></user-data>
    <ul>
      <active-user :user="users"></active-user>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: {
        name: "dmitriy",
        age: 28,
        id: "dm",
      },
    };
  },
  methods: {
    changeUser(name, age) {
      this.users.name = name;
      this.users.age = age;
    },
  },
};
</script>

<style></style>
