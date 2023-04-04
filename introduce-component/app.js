const app = Vue.createApp({
  data() {
    return {
      detailAreVisible: false,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.detailAreVisible = !this.detailAreVisible;
    },
  },
});

app.component("friend-contact", {
  template: `<li>
  <h2>{{f.name}}</h2>
  <button @click="toggleDetails">
    {{detailAreVisible ? "Hide" : "Show"}} Details
  </button>
  <ul v-if="detailAreVisible">
    <li><strong>Phone:</strong> {{ f.phone }}</li>
    <li><strong>Email:</strong> {{ f.email }}</li>
  </ul>
  </li>`,
  data() {
    return {
      detailAreVisible: false,
      f: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailAreVisible = !this.detailAreVisible;
    },
  },
});

app.mount("#app");
