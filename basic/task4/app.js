const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      inputBG: "",
      paragraphVisible: true,
    };
  },
  computed: {
    paragraphClass() {
      return {
        user1: this.userInput === "user1",
        user2: this.userInput === "user2",
        visible: this.paragraphVisible === true,
        hidden: this.paragraphVisible === false,
      };
    },
  },
  methods: {
    toggleButton() {
      this.paragraphVisible = !this.paragraphVisible;
    },
  },
});

app.mount("#assignment");
