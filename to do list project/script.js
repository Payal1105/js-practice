const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create task item
  const li = document.createElement("li");
  li.className = "task-item";
  li.innerHTML = `
    <span>${taskText}</span>
    <button>Delete</button>
  `;

  // Toggle complete on click
  li.querySelector("span").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button functionality
  li.querySelector("button").addEventListener("click", () => {
    li.remove();
  });

  // Add task to list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
});
