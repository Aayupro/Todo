document.getElementById("addButton").addEventListener("click", function() {
    const todoText = document.getElementById("todoText").value;
    if (todoText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = todoText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(deleteButton);
    document.getElementById("list-items").appendChild(li);
    document.getElementById("todoText").value = ""; // Clear input field
});