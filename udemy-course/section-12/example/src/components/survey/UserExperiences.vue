<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <h3 v-if="isLoad">loading...</h3>
      <p v-else-if="!isLoad && error">{{error}}</p>
      <p v-else-if="!isLoad && (!results || results.length === 0)">
        No stored expriences found. Start adding some surve result
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult
  },

  data() {
    return {
      results: [],
      isLoad: false,
      error: null
    };
  },

  methods: {
    loadExperiences() {
      this.isLoad = true;
      this.error = null;
      fetch('https://vue-http-demo-bc60f-default-rtdb.firebaseio.com/surveys.json')
        .then(res => {
          if (res.ok) {
            console.log('json');
            return res.json();
          } else {
            console.log('Connected Error');
          }
        })
        .then(res => {
          if (res) {
            let formatVal = Object.entries(res).map(item => {
              return { id: item[0], ...item[1] };
            });
            this.results = formatVal;
          }

          this.isLoad = false;
        })
        .catch(err => {
          this.isLoad = false;
          this.error = 'Failed to fetch data - please try again later.'
          console.log('error', err);
          
        });
    }
  },

  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
