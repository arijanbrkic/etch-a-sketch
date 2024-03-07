// script.js

document.addEventListener("DOMContentLoaded", function() {
    var container = document.querySelector(".container");
  
    for (let i = 0; i < 16; i++) {
      for (let j = 0; j < 16; j++) {
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        container.appendChild(gridItem);
      }
    }
  });
  