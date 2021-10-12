<template>
  <section>
    filter
  </section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as a Coach</router-link>
    </div>
   <ul v-if="hasCoaches"> 
     <li v-for="coach in filterCoaches" :key="coach.id">
       {{coach.firstName}}
     </li>
   </ul>
   <h3 v-else>No coaches found.</h3>
  </section>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
    filterCoaches() {
      return this.coaches;
    },
    ...mapGetters({coaches: 'coaches/coaches', hasCoaches: 'coaches/hasCoaches'})
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

</style>