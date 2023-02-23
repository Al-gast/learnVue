const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    showFullName() {
      if (this.name === "") {
        return "";
      } else {
        return this.name + " " + "Atallah";
      }
    },
    resetName() {
      this.name = "";
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
  },
});

app.mount("#events");
