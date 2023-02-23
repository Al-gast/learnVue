const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      fullname: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    name(value) {
      if (value === "") {
        return (this.fullname = "");
      } else {
        return (this.fullname = value + " " + this.lastName);
      }
    },
    lastName(value) {
      if (value === "") {
        return (this.fullname = "");
      } else {
        return (this.fullname = this.name + " " + value);
      }
    },
  },
  computed: {
    showFullName() {
      console.log("render");
      if (this.name === "" || this.lastName === "") {
        return "";
      } else {
        return this.name + " " + this.lastName;
      }
    },
  },
  methods: {
    resetName() {
      this.name = "";
      this.lastName = "";
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
