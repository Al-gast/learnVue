const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addCounter() {
      this.counter++;
    },
    lessCounter() {
      this.counter--;
    },
  },
});

app.mount("#events");
