// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0')}`;
  document.body.style.backgroundColor = randomColor;
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = '';
}

// Capture Keyboard Input
// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyDisplay = document.getElementById('keyPressDisplay');
  if (keyDisplay) {
    keyDisplay.textContent = `Key pressed: ${event.key}`;
  }
}

// Process Text Input
// Function to display user input in real-time
function displayUserInput() {
  const input = document.getElementById('textInput');
  const display = document.getElementById('textInputDisplay');
  if (input && display) {
    display.textContent = `You typed: ${input.value}`;
  }
}

// Initialize event listeners when the DOM is loaded
function setupEventListeners() {
  const changeBtn = document.getElementById('changeColorButton');
  if (changeBtn) {
    changeBtn.addEventListener('click', changeBackgroundColor);
  }

  const resetBtn = document.getElementById('resetColorButton');
  if (resetBtn) {
    resetBtn.addEventListener('dblclick', resetBackgroundColor);
  }

  document.body.addEventListener('dblclick', resetBackgroundColor);
  document.addEventListener('keydown', displayKeyPress);

  const textInput = document.getElementById('textInput');
  if (textInput) {
    textInput.addEventListener('input', displayUserInput);
  }
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};