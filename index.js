document.getElementById("addButton").addEventListener("click", function() {
    const todoText = document.getElementById("todoText").value;
    if (todoText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        li.classList.toggle("completed", checkbox.checked);
    });

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(todoText));

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(deleteButton);
    document.getElementById("list-items").appendChild(li);
    document.getElementById("todoText").value = ""; // Clear input field
});

// Filtering functionality
document.getElementById("showAll").addEventListener("click", function() {
    const items = document.querySelectorAll("#list-items li");
    items.forEach(item => {
        item.style.display = "flex";
    });
});

document.getElementById("showCompleted").addEventListener("click", function() {
    const items = document.querySelectorAll("#list-items li");
    items.forEach(item => {
        item.style.display = item.classList.contains("completed") ? "flex" : "none";
    });
});

document.getElementById("showPending").addEventListener("click", function() {
    const items = document.querySelectorAll("#list-items li");
    items.forEach(item => {
        item.style.display = !item.classList.contains("completed") ? "flex" : "none";
    });
});
