// Total width of the grid.
const GRIDSIZE = 600;

// Default grid of 16x16 dimensions.
let rowsAndCols = 16;


const SKETCH_AREA = document.querySelector("#sketch-area");
const SLIDER_CONTAINER = document.querySelector("#container");
const SLIDER = document.querySelector("#slider");
const SLIDER_VALUE = document.querySelector("#slider-value");

SLIDER_VALUE.textContent = `${SLIDER.value} x ${SLIDER.value} (Resolution)`;
// Chained assignment.
SKETCH_AREA.style.width = SKETCH_AREA.style.height = `${GRIDSIZE}px`;

/**
 * Function to create the grid cells.
 */
function createGridCells(rowsAndCols) {
    // Total number of pixels in the grid (e.g. 16x16 = 256).
    for(let i = 0; i < (rowsAndCols * rowsAndCols); i++) {
        const GRID_CELL = document.createElement("div");

        GRID_CELL.style.width = GRID_CELL.style.height = `${(GRIDSIZE / rowsAndCols)}px`;
        GRID_CELL.classList.add("cell");

        SKETCH_AREA.appendChild(GRID_CELL);

        GRID_CELL.addEventListener("mouseenter", setBackgroundColor);
    }
}

function setBackgroundColor() {
    this.style.backgroundColor = "black";
}

// Removes all the children (pixels or cells) of the sketch area.
function removeGridCells() {
    // Every time the first child gets removed
    // the next child (pixel or cell) becomes the first child.
    while(SKETCH_AREA.firstChild) {
        // Hence every single cell gets removed.
        SKETCH_AREA.firstChild.remove();
    }
}

SLIDER.oninput = function () {
    let text = `${this.value} x ${this.value} (Resolution)`;
    SLIDER_VALUE.textContent = text;
    removeGridCells();
    createGridCells(this.value);
}


createGridCells(32);