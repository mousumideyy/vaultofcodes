function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.innerHTML = `${taskInput.value} <button onclick="removeTask(this)">Task completed</button>`;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function removeTask(button) {
    const taskList = document.getElementById("taskList");
    const li = button.parentElement;
    taskList.removeChild(li);
}
