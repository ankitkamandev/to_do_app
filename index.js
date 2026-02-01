const tasks = document.querySelector(".tasks");
const pending = document.querySelector(".pending");
const addbtn = document.querySelector("#addBtn");
const completed = document.querySelector(".completed");
const clearBtn = document.querySelector("#clearBtn");

addbtn.addEventListener("click", addTask);

pending.addEventListener("click", (event) => {
  if (event.target.tagName.toLowerCase() === "li") {
    const task = event.target;

    // Animate out
    task.classList.add("move-out");

    task.addEventListener(
      "animationend",
      () => {
        task.classList.remove("move-out");

        // Move to completed list
        completed.append(task);

        // Animate in
        task.classList.add("move-in");

        // Clean up class after animation
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


function addTask(){
    if(tasks.value.trim() === ""){
        return;
    }
    const newTask = document.createElement("li");
    newTask.textContent = tasks.value;
    tasks.value = "";
    pending.append(newTask);
}

clearBtn.addEventListener("click", clearCompletedTasks);

function clearCompletedTasks()
{
    while(completed.children.length > 0)
    {
        completed.removeChild(completed.firstChild);
        // or can use the 
        // completed.innerHTML = "";
    }
}