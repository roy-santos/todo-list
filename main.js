var todoList = {
  todos: [],

  displayTodos: function() {
    console.log(this.todos);
  },

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  changeTodo: function(index, todoText) {
    this.todos[index].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function(index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  },

  toggleCompleted: function(index) {
    this.todos[index].completed = !this.todos[index].completed;
    this.displayTodos();
  }
};

//todoList.displayTodos();
//todoList.addTodo("item 4");
//todoList.changeTodo(3, "item 5");
//todoList.deleteTodo(1);
