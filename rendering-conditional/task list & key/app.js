const app = Vue.createApp({
  data() {
    return {
      listViews: true,
      inputData: "",
      datas: [],
    };
  },
  methods: {
    addData() {
      this.datas.push(this.inputData);
    },
    changeListView() {
      this.listViews = !this.listViews;
    },
  },
});

app.mount("#assignment");
