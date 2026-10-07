// Name: Adeena Akram | Registration No: 2500605

const form = document.getElementById("todoForm");

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const counter = document.getElementById("counter");
const error = document.getElementById("error");

const clearCompleted =
    document.getElementById("clearCompleted");

const filterButtons =
    document.querySelectorAll(".filters button");


let currentFilter = "all";


form.addEventListener("submit", function (e) {

    e.preventDefault();

    const taskText = taskInput.value.trim();


    if (taskText === "") {

        error.textContent =
            "Task cannot be empty.";

        return;
    }


    const tasks =
        document.querySelectorAll(".task-text");

    let duplicate = false;


    tasks.forEach(function (task) {

        if (
            task.textContent.toLowerCase() ===
            taskText.toLowerCase()
        ) {

            duplicate = true;

        }

    });


    if (duplicate) {

        error.textContent =
            "This task already exists.";

        return;
    }


    error.textContent = "";


    const li = document.createElement("li");

    li.classList.add("task");


    const checkbox =
        document.createElement("input");

    checkbox.type = "checkbox";

    checkbox.classList.add("complete");


    const span =
        document.createElement("span");

    span.textContent = taskText;

    span.classList.add("task-text");


    const deleteButton =
        document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.classList.add("delete");


    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);


    taskInput.value = "";

    updateCounter();

    applyFilter();

});


taskList.addEventListener("click", function (e) {


    if (e.target.classList.contains("delete")) {

        e.target.parentElement.remove();

        updateCounter();

        applyFilter();

    }


    if (e.target.classList.contains("task-text")) {

        e.target.parentElement.classList.toggle("done");

        updateCounter();

    }

});


taskList.addEventListener("change", function (e) {


    if (e.target.classList.contains("complete")) {

        e.target.parentElement.classList.toggle("done");

        updateCounter();

        applyFilter();

    }

});


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        currentFilter =
            button.dataset.filter;

        applyFilter();

    });

});


clearCompleted.addEventListener("click", function () {

    const completedTasks =
        document.querySelectorAll(".task.done");


    completedTasks.forEach(function (task) {

        task.remove();

    });


    updateCounter();

    applyFilter();

});


function updateCounter() {

    const tasks =
        document.querySelectorAll(".task");

    const remaining =
        document.querySelectorAll(".task:not(.done)");


    counter.textContent =
        "Total: " +
        tasks.length +
        " | Remaining: " +
        remaining.length;

}


function applyFilter() {

    const tasks =
        document.querySelectorAll(".task");


    tasks.forEach(function (task) {


        if (currentFilter === "all") {

            task.style.display = "flex";

        }


        else if (currentFilter === "active") {

            if (task.classList.contains("done")) {

                task.style.display = "none";

            }

            else {

                task.style.display = "flex";

            }

        }


        else if (currentFilter === "completed") {

            if (task.classList.contains("done")) {

                task.style.display = "flex";

            }

            else {

                task.style.display = "none";

            }

        }

    });

}