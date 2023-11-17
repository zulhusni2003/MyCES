// Execute code bila DOM (Document Object Model) is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Load tasks dari local storage when the page loads
    loadTasks();
});

// Function untuk add a new task
function addTask() {
    // Get references untuk input field and task list
    const newTaskInput = document.getElementById('newTask');
    const taskList = document.getElementById('taskList');

    // Check kalau input is empty
    if (newTaskInput.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new task list item
    const task = document.createElement('li');
    task.innerHTML = `
        <span>${newTaskInput.value}</span>
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    // Add the task item to the task list
    taskList.appendChild(task);

    // Save the new task to local storage
    saveTask(newTaskInput.value);
    newTaskInput.value = '';
}

// Function to mark a task as "completed"
function completeTask(button) {
    // Get the parent task item of the clicked button
    const task = button.parentNode;
    // Toggle the 'completed' class to visually mark/unmark the task as completed
    task.classList.toggle('completed');
}

// Function to delete a task
function deleteTask(button) {
    // Get the parent task item of the clicked button
    const task = button.parentNode;
    // Remove the task item from the task list
    task.remove();

    // Retrieve the current list of tasks from local storage
    const tasks = getSavedTasks();
    // Find the index of the deleted task in the tasks array
    const taskIndex = Array.from(task.parentNode.children).indexOf(task);
    tasks.splice(taskIndex, 1);
    saveTasks(tasks);
}

// Function to save a new task to local storage
function saveTask(task) {
    const tasks = getSavedTasks();
    tasks.push(task);
    saveTasks(tasks);
}

// Function to save the entire list of tasks to local storage
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to retrieve the list of tasks from local storage
function getSavedTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

// Function to load tasks from local storage and display them on the page
function loadTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = getSavedTasks();

    // Iterate through each task and create a corresponding list item
    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${task}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        // Add the list item to the task list
        taskList.appendChild(listItem);
    });
}
