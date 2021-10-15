<template>
  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button v-if="!isCoach" link to="/register" >Register as a Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
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
</template>

<script>
import { mapGetters } from 'vuex';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import CoachItem from '../../components/coaches/CoachItem.vue';
export default {
  components: { CoachItem, CoachFilter },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  computed: {
    filterCoaches() {
      let coaches = this.coaches;
      // return coaches.filter(coach => {
      //   if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
      //     return true;
      //   }
      //   if (this.activeFilters.backend && coach.areas.includes('backend')) {
      //     return true;
      //   }
      //   if (this.activeFilters.career && coach.areas.includes('career')) {
      //     return true;
      //   }
      //   return false;
      // });
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
    ...mapGetters({
      coaches: 'coaches/coaches',
      hasCoaches: 'coaches/hasCoaches'
    })
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
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
