var todoList = {
  todos: [],

  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Your todo list is empty!");
    } else {
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log("(x)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
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
  },
  toggleAll: function() {
    totalTodos = this.todos.length;
    completedTodos = 0;

    //Get the number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    //Case 1: checks everything is true, make it false
    if (completedTodos === totalTodos) {
      //Make everything false
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      //Case 2: Otherwise, make everything true.
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};
