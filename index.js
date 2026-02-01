const tasks = document.querySelector(".tasks");
const pending = document.querySelector(".pending");
const addbtn = document.querySelector("#addBtn");
const completed = document.querySelector(".completed");
const clearBtn = document.querySelector("#clearBtn");

addbtn.addEventListener("click", addTask);

pending.addEventListener("click", (event) => {
  if (event.target.classList.contains("check")) {
    const task = event.target.closest("li");

    task.classList.add("move-out");

    task.addEventListener(
      "animationend",
      () => {
        task.classList.remove("move-out");

        // lock checkbox
        event.target.checked = true;
        event.target.disabled = true;

        completed.append(task);

        task.classList.add("move-in");

        task.addEventListener(
          "animationend",
          () => task.classList.remove("move-in"),
          { once: true }
        );
      },
      { once: true }
    );
  }
});


function addTask() {
  if (tasks.value.trim() === "") return;

  // creating the list item in for each task
  const li = document.createElement("li");


  // creating checkboxes for the task
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("check");


  const span = document.createElement("span");
  span.textContent = tasks.value;
  li.append(span, checkbox);

  pending.append(li);
  tasks.value = "";
}

clearBtn.addEventListener("click", clearCompletedTasks);

function clearCompletedTasks() {
  while (completed.children.length > 0) {
    completed.removeChild(completed.firstChild);
    // or can use the
    // completed.innerHTML = "";
  }
}
