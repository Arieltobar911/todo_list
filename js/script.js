import { overTog, newTask } from "./dom.js";

const overlay = document.getElementById("overlay"); // overlay with formulary
const list = document.querySelector("#list"); // all tasks container
const desc = document.getElementById("description"); // task description
const title = document.getElementById("title"); // task title
const form = document.getElementById("form"); // formulary
const selector = document.querySelector("#selector"); // task filter 
const count = document.querySelector(".count") // active tasks counter

// close-open formulary buttons
document.querySelectorAll(".addForm").forEach(formToggle => 
  formToggle.addEventListener("click", () => overTog(overlay)) 
);

// submit system: prevent default form and creates new task
form.addEventListener("submit", (event) => { // formulary function
  event.preventDefault(); // page doesn't reload
  newTask(list, title.value, desc.value, overlay, activeTasks);
  form.reset(); // input reset
});

// "ForEach" task delete-update
list.addEventListener("click", (e) => {
  const taskBlock = e.target.closest(".task");
  const taskContent = taskBlock.querySelector(".task-content"); // title + desc

  // changes the task status with checkboc
  if (e.target.matches(".task-check")){ // checkboxes
    taskContent.classList.toggle("completed"); 
    taskBlock.dataset.status = e.target.checked ? "completed" : "active";
  }
  if (e.target.matches(".task-delete")) taskBlock.remove(); // remove the task (ParentElement)

  activeTasks();
});

// Filter system: acording to filter value
selector.addEventListener("change", () => {
  const box_task = document.querySelectorAll(".task"); // select all actual tasks
  box_task.forEach(BT => {
    BT.style.display = (selector.value=== "all" || selector.value === BT.dataset.status) ? "flex" : "none";
    // flex = flex and show; none = hides
  });
});

// updates counter
function activeTasks(){ 
  const active = document.querySelectorAll('.task[data-status="active"]');
  count.textContent = active.length;
}