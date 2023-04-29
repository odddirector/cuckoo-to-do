const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

taskInput.addEventListener("keydown", onTaskInputKeyDown);

function onTaskInputKeyDown(event) {
    if (event.keyCode == 13) {
        let taskText = taskInput.value;
        addTask(taskText);
        taskInput.value = "";
    }
};

function addTask(text) {

    const numberOfTasks = taskList.getElementsByTagName("li").length;

    const taskId = "task_" + numberOfTasks;

    let taskItem = document.createElement("li");

    let taskCheckbox = document.createElement("input");
    taskCheckbox.id = taskId;
    taskCheckbox.type = "checkbox";

    let taskLabel = document.createElement("label");
    taskLabel.htmlFor = taskId;
    taskLabel.value = text;
    taskLabel.innerText = text;

    let removeTaskButton = document.createElement("span");
    removeTaskButton.classList.add("removeTask");
    removeTaskButton.innerText = " × ";
    
    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskLabel);
    taskItem.appendChild(removeTaskButton);

    taskList.appendChild(taskItem);
}

// this is a single-line comment 

/* this
is a multiline comment
*/
