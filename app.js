let app = new Vue({
     el: "#app",
     data: {
          todos: [
               {
                    title: "work number 1",
                    edit: false,
               },
               {
                    title: "work number 2",
                    edit: false,
               },
               {
                    title: "work number 3",
                    edit: true,
               },
          ],
          newTodos: "",
     },
     methods: {
          add() {
               this.todos.push({
                    title: this.newTodos,
               }),
                    (this.newTodos = "");
          },
          delTodos(index) {
               this.todos.splice(index, 1);
          },
          editTodo(index) {
               for (let i = this.todos.length - 1; i >= 0; i--) {
                    this.todos.edit = false;
               }
               this.todos[index].edit = !this.todos[index].edit;
          },
          updateTodo(title, index) {
              this.todos[index].title = title
              this.todos[index].edit = false
          },
     },
});
