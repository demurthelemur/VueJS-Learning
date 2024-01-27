const app = Vue.createApp({
  data() {
    return {
      currentTask: "",
      tasks: [],
      showList: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.currentTask);
    },
    toggleList() {
      this.showList = !this.showList;
    },
  },
});

app.mount("#assignment");
