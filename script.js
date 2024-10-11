//We need to create a 16 x 16 BY DEFAULT grid
//for a bonus challenge, we will make the size be able to change from 4x4 up to 64x64
//Three settings: one is user picked color, one is rainbow, one is "Shading by 10%"
const slider = document.getElementById("slider");
const container = document.getElementById("container");
const colorPicker = document.getElementById("colorPicker");
const rainbowBtn = document.getElementById("rainbowBtn");
const eraserBtn = document.getElementById("eraserBtn");
const shadeBtn = document.getElementById("shadeBtn");
const clearBtn = document.getElementById("clearBtn");

//default mode and color
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

//create function to get a random color for rainbow mode
const getRgbValue = () => {
  const min = 0;
  const max = 255; 
  return Math.ceil(Math.random() * (max - min)) + min
}


//we need a function to alternate between the color modes and add event listeners to each button.

function changeMode(e) {
  if (currentMode === 'color') {
    e.target.style.backgroundColor = currentColor;
    e.target.style.opacity = 1;
  } else if (currentMode === 'shade') {
    //NEEDS WORK, not quite there yet
    if (!e.target.style.opacity) e.target.style.opacity = '1';
    opacity = parseFloat(e.target.style.opacity);
    e.target.style.opacity = opacity - 0.1;
  } else if (currentMode === 'eraser') {
    e.target.style.backgroundColor = "#FFFFFF";
  } else if (currentMode === 'rainbow') {
    //generate a random RGB value for rainbow blocks
    const randomR = getRgbValue();
    const randomG = getRgbValue();
    const randomB = getRgbValue();
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    e.target.style.opacity = 1;
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

rainbowBtn.addEventListener('click', function(){
  currentMode = 'rainbow';
});

clearBtn.addEventListener('click', function() {
  const allGridDivs = container.querySelectorAll('.grid-item');
  allGridDivs.forEach(div => {
    div.style.backgroundColor = "#FFFFFF" ;
  });
});

shadeBtn.addEventListener('click', function(){
  currentMode = 'shade';
});