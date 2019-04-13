var todoList = {
  todos: ["item 1", "item 2", "item 3"],

  displayTodos: function() {
    console.log(this.todos);
  },

  addTodo: function(newTodo) {
    this.todos.push(newTodo);
    this.displayTodos();
  },

  changeTodo: function(index, change) {
    this.todos[index] = change;
    this.displayTodos();
  },

  deleteTodo: function(index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  }
};

todoList.displayTodos();
todoList.addTodo("item 4");
todoList.changeTodo(3, "item 5");
todoList.deleteTodo(1);
