const app = Vue.createApp({
  data() {
    return {
      name: "Ata",
      age: 18,
      image:
        "https://images.unsplash.com/photo-1676928521690-18a513b1f37f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
    };
  },
  methods: {
    agePlusFive() {
      return this.age + 5;
    },
    randomInt() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
