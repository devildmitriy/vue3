<template>
  <li>
    <h2>{{ friend.name }} {{ friend.isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">Show details</button>
    <button @click="toggleFavorite(friend.id)">Favorite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
    <button @click="$emit('delete-friend',friend.id)">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    friend: {
      id: { type: String, required: true },
      name: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String, required: true },
      isFavorite: {
        type: Boolean,
        required: false,
        default: false,
        validator: function(value) {
          return value === true || value === false;
        },
      },
    },
  },
  emits: { 
      "toggle-favorite": function(id) {
          if(id) {
              return true;
          } else {
              console.warn('id is missing');
              return false;
          }
      },
      "delete-friend": function(id){
        if(id) {
              return true;
          } else {
              console.warn('id is missing');
              return false;
          }
      } 
      },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite(id) {
      this.$emit("toggle-favorite", id);
    },
  },
};
</script>

<style></style>
