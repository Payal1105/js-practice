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
    <input type="checkbox" class="task-check">
    <span>${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  // Checkbox toggle complete
  li.querySelector(".task-check").addEventListener("change", (e) => {
    li.classList.toggle("completed", e.target.checked);
  });

 
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });

  // Add task to list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
});
