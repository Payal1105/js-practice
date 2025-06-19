const addNoteBtn = document.getElementById("addNoteBtn");
const noteInput = document.getElementById("noteInput");
const notesContainer = document.getElementById("notesContainer");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Generate a random background color from a preset list
function getRandomColor() {
  const colors = ["#fffa91", "#c4f0c5", "#ffd6a5", "#a0c4ff", "#bdb2ff", "#ffc6ff"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Save notes to localStorage
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Create and display a single note
function createNote(noteObj, index) {
  const note = document.createElement("div");
  note.className = "note";
  note.style.backgroundColor = noteObj.color || getRandomColor();

  note.innerHTML = `
    <p contenteditable="true">${noteObj.text}</p>
    <button class="deleteNote">Delete</button>
  `;

  // Update note text on edit
  const para = note.querySelector("p");
  para.addEventListener("input", () => {
    notes[index].text = para.innerText;
    saveNotes();
  });

  // Delete note
  note.querySelector(".deleteNote").addEventListener("click", () => {
    notes.splice(index, 1); // Remove from array
    saveNotes();
    renderNotes(); // Re-render notes
  });

  notesContainer.appendChild(note);
}

// Render all notes
function renderNotes() {
  notesContainer.innerHTML = "";
  notes.forEach((note, index) => createNote(note, index));
}

// Add a new note
addNoteBtn.addEventListener("click", () => {
  const text = noteInput.value.trim();
  if (text === "") {
    alert("Please write something!");
    return;
  }

  const newNote = {
    text: text,
    color: getRandomColor()
  };

  notes.push(newNote);
  saveNotes();
  renderNotes();
  noteInput.value = "";
});

// Initial render from localStorage
renderNotes();
