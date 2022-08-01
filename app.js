const app = Vue.createApp({
  data() {
    return {
      todoList: [],
      newentry: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newentry == "") {
        alert("Please enter a new entry");
      } else {
        this.todoList.push({
          id: new Date().getTime(),
          title: this.newentry,
          description: false,
        });
        this.newentry = "";
      }
    },
    addenterTodo(event) {
      if (this.newentry == "") {
        alert("Please enter a new entry");
      } else {
        this.todoList.push({
          id: new Date().getTime(),
          title: event.target.value,
          description: false,
        });
        this.newentry = "";
      }
    },

    removeItem(todoItem) {
      this.todoList = this.todoList.filter((todo) => todo !== todoItem);
    },
  },

  computed: {
    doneCount() {
      return this.todoList.filter((t) => t.description).length;
    },
    notdoneCount() {
      return this.todoList.filter((t) => !t.description).length;
    },
  },
});

app.mount("#dom");
