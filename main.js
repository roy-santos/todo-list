var todos = ["item 1", "item 2", "item 3"];

function displayTodos() {
  console.log(todos);
}

displayTodos();

function addTodo(newTodo) {
  todos.push(newTodo);
  displayTodos();
}

addTodo("item 4");

function changeTodo(index, change) {
  todos[index] = change;
  displayTodos();
}

changeTodo(0, "item 0");

function deleteTodo(index) {
  todos.splice(index, 1);
  displayTodos();
}

deleteTodo(0);
