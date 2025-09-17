// Change background color
function changeBackgroundColor() {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
  document.body.style.backgroundColor = randomColor;
}

// Reset background color
function resetBackgroundColor() {
  document.body.style.backgroundColor = "";
}

// Display key presses
function displayKeyPress(event) {
  const output = document.getElementById("keyPressDisplay");
  if (output) {
    output.textContent = `Key pressed: ${event.key}`;
  }
}

// Display text input
function displayUserInput() {
  const inputField = document.getElementById("textInput");
  const display = document.getElementById("textInputDisplay");
  if (display) {
    display.textContent = inputField.value
      ? `You typed: ${inputField.value}`
      : "Your input will be displayed here.";
  }
}

// Attach all event listeners
function setupEventListeners() {
  const changeColorButton = document.getElementById("changeColorButton");
  const resetColorButton = document.getElementById("resetColorButton");
  const textInput = document.getElementById("textInput");

  if (changeColorButton) {
    changeColorButton.addEventListener("click", changeBackgroundColor);
  }

  if (resetColorButton) {
    resetColorButton.addEventListener("dblclick", resetBackgroundColor);
  }

  document.addEventListener("keydown", displayKeyPress);

  if (textInput) {
    textInput.addEventListener("input", displayUserInput);
  }
}

// Initialize automatically when DOM is ready
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", setupEventListeners);
}
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}