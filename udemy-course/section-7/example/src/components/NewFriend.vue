<template>
  <form @submit.prevent="addNewFriend">
    <div>
      <label for="">Name</label>
      <input type="text" v-model="output.name" />
    </div>
    <div>
      <label for="">Phone</label>
      <input type="text" v-model="output.phone" />
    </div>
    <div>
      <label for="">E-mail</label>
      <input type="text" v-model="output.email" />
    </div>
    <button @submit.prevent="addNewFriend">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      output: {
        name: "",
        phone: "",
        email: "",
        id: null,
      },
    };
  },
  methods: {
    addNewFriend() {
      this.output.id = new Date();
      this.$emit("add-new-friend", this.output);
      this.defaultData();
    },
    defaultData() {
      this.output.name = "";
      this.output.phone = "";
      this.output.email = "";
      this.output.id = null;
    },
  },
};
</script>

<style></style>
