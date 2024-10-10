//We need to create a 16 x 16 BY DEFAULT grid
//for a bonus challenge, we will make the size be able to change from 4x4 up to 64x64
//Three settings: one is user picked color, one is rainbow, one is "Shading by 10%"
const slider = document.getElementById("sizePicker");
const container = document.getElementById("container");

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

  }

}

//default grid size set at 16x16
createGrid(16);

//Listen to slider to change grid size
slider.addEventListener('change', function() {
  const currentSize = slider.value;
  createGrid(currentSize);
  
});