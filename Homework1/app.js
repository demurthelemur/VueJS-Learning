const app = Vue.createApp({
  data() {
    return {
      name: "Demir Dereli",
      age: 23,
      lemurImage: "https://cdn.britannica.com/20/154120-050-78DE15C0/lemur.jpg",
    };
  },
  methods: {
    randomInt() {
      return Math.random().toPrecision(2);
    },
  },
});

app.mount("#assignment");
