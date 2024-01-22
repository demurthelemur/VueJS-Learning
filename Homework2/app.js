const app = Vue.createApp({
  data() {
    return {
      name: "initialValue",
      lastname: "initialValue",
    };
  },
  methods: {
    showAlert() {
      alert("test");
    },
    changeName() {
      this.name = event.target.value;
    },
    changeLastName() {
      this.lastname = event.target.value;
    },
  },
});

app.mount("#assignment");
