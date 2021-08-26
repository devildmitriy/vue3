const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    setName(e){
      this.name = e
    },
    submit(e) {
      console.log(e)
    }
  }
});

app.mount('#events');
