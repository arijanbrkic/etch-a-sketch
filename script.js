//We need to create a 16 x 16 BY DEFAULT grid
//for a bonus challenge, we will make the size be able to change from 4x4 up to 64x64
//Three settings: one is user picked color, one is rainbow, one is "Shading by 10%"

const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "#000000";
const container = document.getElementById("container");
let currentSize = DEFAULT_SIZE;

for (let i = 0; i < currentSize * currentSize; i++){
  const gridDiv = document.createElement("div");
  gridDiv.textContent = "*";
  gridDiv.classList.add("grid-item");
  container.appendChild(gridDiv);

}