<template>
  <form @submit.prevent="addNewUser">
    <div>
      <label for="">Name</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label for="">Age</label>
      <input type="text" v-model="age" />
    </div>
    <button>add</button>
  </form>
</template>

<script>
export default {
  emits: ["change-user"],
  data() {
    return {
      name: "",
      age: "",
    };
  },
  methods: {
    addNewUser() {
      this.$emit("change-user", this.name, this.age);
    },
  },
};
</script>

<style></style>
