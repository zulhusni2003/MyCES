new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: getSavedTasks()
    },
    methods: {
        addTask() {
            if (this.newTask.trim() === '') {
                alert('Please enter a task!');
                return;
            }

            this.tasks.push({ name: this.newTask, completed: false });
            this.saveTasks();
            this.newTask = '';
        },
        completeTask(index) {
            this.$set(this.tasks, index, { ...this.tasks[index], completed: !this.tasks[index].completed });
            this.saveTasks();
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
            this.saveTasks();
        },
        saveTasks() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    }
});

function getSavedTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}
