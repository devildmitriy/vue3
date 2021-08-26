const app = Vue.createApp({
  data() {
    return {
      goals: [],
      inputText: ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputText)
      this.inputText = ''
    },
    remove(idx){
      this.goals.splice(idx,1)
    }
  },
  computed: {
    isEmpty() {
      if (this.goals.length > 0) {
        return false;
      } else {
        return true;
      }
    }
  },
});

app.mount('#user-goals');