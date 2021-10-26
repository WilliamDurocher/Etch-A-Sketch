

const gridContainer = document.getElementById('grid-container');

function makeGrid(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      gridContainer.appendChild(cell).className = "grid-item";
    };
  };


makeGrid(16,16)