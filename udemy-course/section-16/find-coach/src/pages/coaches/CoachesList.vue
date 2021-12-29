<template>
  <div>
    <base-dialog :show="!!error" title="An error occured!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadCoaches(true)"
            >Refresh</base-button
          >
          <base-button link to="/auth?redirect=register" v-if="!isLoggedIn">Login to Register as a Coach</base-button>
          <base-button v-if="isLoggedIn && !isCoach && !isLoading" link to="/register"
            >Register as a Coach</base-button
          >
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCoaches">
          <coach-item
            v-for="coach in filterCoaches"
            :key="coach.id"
            :firstName="coach.firstName"
            :lastName="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
            :id="coach.id"
          ></coach-item>
        </ul>
        <h3 v-else>No coaches found.</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import CoachItem from '../../components/coaches/CoachItem.vue';
export default {
  components: { CoachItem, CoachFilter },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  computed: {
    isLoggedIn() {
      console.log('logged',this.$store.getters.isAuthenticated);
      return this.$store.getters.isAuthenticated;
    },
    filterCoaches() {
      let coaches = this.coaches;
      /* return coaches.filter(coach => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      }); */
      const onlyActiv = Object.entries(this.activeFilters)
        .filter(arr => arr[1])
        .map(key => key[0]);
      return coaches.filter(coach => {
        let result = false;
        onlyActiv.forEach(item => {
          if (coach.areas.includes(item)) result = true;
        });
        return result;
      });
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
    // ...mapGetters({
    //   coaches: 'coaches/coaches',
    //   hasCoaches: 'coaches/hasCoaches'
    // })
    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
    },
    coaches() {
      return this.$store.getters['coaches/coaches'];
    }
  },
  created() {
    this.loadCoaches();
  },
  methods: {
    handleError() {
      this.error = null;
    },
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches', {
          forceRefresh: refresh
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
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

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
