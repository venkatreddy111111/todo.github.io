const todoList = document.getElementById('todo-list');
const addTodoForm = document.getElementById('add-todo');
const newTodoInput = document.getElementById('new-todo');

// New variable to store tasks (initially empty array)
let todos = [];

addTodoForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const newTodoText = newTodoInput.value.trim(); // Get trimmed input value

  if (newTodoText) {
    // Create a new list item element
    const newTodoItem = document.createElement('li');
    newTodoItem.textContent = newTodoText;

    // Add functionality to mark a todo item as complete (optional)
    // newTodoItem.addEventListener('click', function() {
    //   this.classList.toggle('completed');
    // });

    // Add the new item to the list and the todos array
    todoList.appendChild(