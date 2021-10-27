
  const gridContainer = document.getElementById('grid-container');
  const gridItems = [];


function run(){
  makeGrid(16,16);
  addSketchEffects(gridItems);

}


function makeGrid(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      gridContainer.appendChild(cell).className = "grid-item";
      gridItems.push(cell);
    };
  };


function addSketchEffects(gridItems){
  gridItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = "green";
    })
  
  });
}



run();
