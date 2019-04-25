var todoList = {
  todos: [],

  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Your todo list is empty!");
    } else {
      console.log("My Todos:");
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
      for (var j = 0; j < totalTodos; j++) {
        this.todos[j].completed = false;
      }
    } else {
      //Case 2: Otherwise, make everything true.
      for (var k = 0; k < totalTodos; k++) {
        this.todos[k].completed = true;
      }
    }
    this.displayTodos();
  }
};

var handlers = {
  displayTodos: function() {
    var displayTodosButton = document.getElementById("displayTodosButton");
    todoList.displayTodos();
  },
  addTodo: function() {
    var addTodosTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodosTextInput.value);
    addTodosTextInput.value = "";
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById(
      "changeTodoPositionInput"
    );
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.changeTodo(
      changeTodoPositionInput.valueAsNumber,
      changeTodoTextInput.value
    );
    changeTodoPositionInput.value = "";
    changeTodoTextInput.value = "";
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById(
      "deleteTodoPositionInput"
    );
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = "";
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById(
      "toggleCompletedPositionInput"
    );
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
  },
  toggleAll: function() {
    var toggleAllButton = document.getElementById("toggleAllButton");
    todoList.toggleAll();
  }
};
