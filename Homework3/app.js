const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    add(num) {
      this.number += num;
    },
  },
  computed: {
    result() {
      if (this.number < 37) {
        return this.number + " " + "Not there yet";
      } else if (this.number === 37) {
        return this.number;
      } else {
        return this.number + " " + "Too High!";
      }
    },
  },
  watch: {
    number(value) {
      const that = this;
      setTimeout(() => {
        this.number = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
