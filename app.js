
const gridContainer = document.getElementById('grid-container');
const gridItems = [];

const saveBtn = document.getElementById('btn-info');
const changeBtn = document.getElementById('btn-change');
const clearBtn = document.getElementById('btn-clear');

const modalContainer = document.getElementById('modal-container');
const modalClose = document.getElementById('close');

function run(size) {

  //default grid size
  if (size === undefined) {
    size = 16;
  }
  makeGrid(size, size);
  addSketchEffects(gridItems);

}

/* Core functions and listeners */

function addSketchEffects(gridItems) {
  gridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = "#f8c7cc";
    })

  });
}

gridContainer.addEventListener("mousedown", function () {
  window.addEventListener("mousemove", drag);
  window.addEventListener("mouseup", lift);
  function drag() {
    //when the person drags their mouse while holding the mouse button down
    gridItems.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.backgroundColor = "";
      })
    });
  }
  function lift() {
    //when the person lifts mouse
    addSketchEffects(gridItems);
    //delete event listeners so that it doesn't keep saying drag
    window.removeEventListener("mousemove", drag)
    window.removeEventListener("mouseup", this)
  }
});

saveBtn.addEventListener('click', openModal);
changeBtn.addEventListener('click', changeGrid);
clearBtn.addEventListener('click', clearGrid);

modalClose.addEventListener('click', closeModal);

/* Grid Functions */

function makeGrid(rows, cols) {
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = "grid-item";
    gridItems.push(cell);
  };
};

function deleteGrid() {
  gridItems.forEach(item => {
    item.remove();
  })
}

function clearGrid() {
  gridItems.forEach(item => {
    item.style.backgroundColor = "";
  })
}

function changeGrid(msg) {
  let size;
  if (msg && typeof msg === 'string') {
    size = prompt(msg);

  } else {
    size = prompt('Choose a number from 1 to 100:');
  }
  if (size > 100 || size == '' || size % 1 != 0) {

    //call function until cancel or valid number
    changeGrid('Please try a different number:');
  } else if (size) {

    deleteGrid();
    run(size);

  } else {
    //user canceled prompt, do nothing
  }
}




/* Modal functions */
function openModal() {
  modalContainer.style.display = 'block';
}

function closeModal() {
  modalContainer.style.display = 'none';
}

window.onclick = function (event) {
  if (event.target == modalContainer) {
    closeModal();
  }
}


//initialize app
run();
