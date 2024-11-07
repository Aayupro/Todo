// script.js
document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const li = document.createElement('li');

        // Create a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';

        // Add event listener to checkbox to toggle completed class
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
            filterTasks(); // Reapply the filter after checking/unchecking
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(taskValue));

        // Add a delete button to each task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn'; // Add class for styling

        // Delete task on button click
        deleteBtn.addEventListener('click', function() {
            li.remove();
            filterTasks(); // Reapply the filter after deleting
            // Hide the filter dropdown if no tasks are left
            if (document.querySelectorAll('#taskList li').length === 0) {
                document.getElementById('filterSelect').classList.add('hidden');
            }
        });

        li.appendChild(deleteBtn);
        document.getElementById('taskList').appendChild(li);
        taskInput.value = ''; // Clear the input field

        // Show the filter dropdown when the first task is added
        document.getElementById('filterSelect').classList.remove('hidden');

        filterTasks(); // Reapply the filter when a new task is added
    } else {
        alert('Please enter a task');
    }
});

// Filter tasks based on the selected filter
document.getElementById('filterSelect').addEventListener('change', filterTasks);

function filterTasks() {
    const filterValue = document.getElementById('filterSelect').value;
    const tasks = document.querySelectorAll('#taskList li');

    tasks.forEach(task => {
        const checkbox = task.querySelector('.task-checkbox');
        if (filterValue === 'all') {
            task.style.display = '';
        } else if (filterValue === 'active') {
            task.style.display = checkbox.checked ? 'none' : '';
        } else if (filterValue === 'completed') {
            task.style.display = checkbox.checked ? '' : 'none';
        }
    });
}