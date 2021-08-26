Vue.createApp({
  data() {
    return {
      inputText: "",
      goals: [],
    };
  },
  methods: {
    add() {
      this.goals.push(this.inputText);
      this.inputText = "";
    },
  },
}).mount("#app");
