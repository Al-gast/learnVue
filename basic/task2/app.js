const app = Vue.createApp({
  data() {
    return {
      textAlert: "",
      output: "",
      output2: "",
      confirmedOutput: "",
    };
  },
  methods: {
    setTextAlert(event) {
      this.textAlert = event.target.value;
    },
    setOutput(event) {
      this.output = event.target.value;
    },
    setOutput2(event) {
      this.output2 = event.target.value;
    },
    setConfirmOutput() {
      this.confirmedOutput = this.output2;
    },
    showAlert() {
      alert(this.textAlert);
    },
  },
});

app.mount("#assignment");
