//We need to create a 16 x 16 BY DEFAULT grid
//for a bonus challenge, we will make the size be able to change from 4x4 up to 64x64
//Three settings: one is user picked color, one is rainbow, one is "Shading by 10%"
const slider = document.getElementById("slider");
const container = document.getElementById("container");
const colorPicker = document.getElementById("colorPicker");
const rainbowBtn = document.getElementById("rainbowBtn");
const eraserBtn = document.getElementById("eraserBtn");
const shadeBtn = document.getElementById("shadeBtn");

let currentMode = 'color';
let currentColor = '#000000';

//Function to create grid
function createGrid(size) {
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
//Create the container divs base on the user's size input
  for (let i = 0; i < size * size; i++){
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid-item");
    container.appendChild(gridDiv);
    gridDiv.addEventListener('mousedown', changeMode);
    gridDiv.addEventListener('mouseover', changeMode);

  }

}

//default grid size set at 16x16
createGrid(16);

//Listen to slider to change grid size
slider.addEventListener('change', function() {
  const currentSize = slider.value;
  createGrid(currentSize);
  
});

//we need a function to alternate between the color modes and add event listeners to each button.

function changeMode(e) {
  if (currentMode === 'color') {
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === 'eraser') {
    e.target.style.backgroundColor = "#FFFFFF";
  }
}

//event listeners for each mode

colorPicker.addEventListener('input', function() {
  currentMode = 'color';
  currentColor = colorPicker.value;
});

eraserBtn.addEventListener('click', function() {
  currentMode = 'eraser';
});