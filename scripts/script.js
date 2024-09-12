// Total width of the grid.
const GRID_WIDTH = getComputedStyle(document.body).getPropertyValue("--grid-width");
const ACCENT_COLOR = getComputedStyle(document.body).getPropertyValue("--accent-color");
const INACTIVE_COLOR = getComputedStyle(document.body).getPropertyValue("--inactive-color");

// Default grid of 16x16 dimensions.
let rowsAndCols = 16;

const SKETCH_AREA = document.querySelector("#sketch-area");
const CONTAINER = document.querySelector(".container");
const SLIDER = document.querySelector("#slider");
const SLIDER_VALUE = document.querySelector("#slider-value");

const GRID_TOGGLE = document.querySelector("#grid-toggle");

let gridVisible = false; //

function toggleGrid() {
    gridVisible = gridVisible ? false : true;
    GRID_TOGGLE.style.color = gridVisible ? ACCENT_COLOR : INACTIVE_COLOR;

    removeGridCells();
    createGridCells();
}


/**
 * Function to create the grid cells.
 */
function createGridCells() {
    // Equal width and height of the pixel (square box in the grid).
    let widthOrHeight = 0;

    // Total number of pixels in the grid (e.g. 16x16 = 256).
    for(let i = 0; i < (rowsAndCols * rowsAndCols); i++) {
        const GRID_CELL = document.createElement("div");

        if(gridVisible) {
            widthOrHeight = `${(parseInt(GRID_WIDTH) / rowsAndCols)}px`;
            GRID_CELL.style.border = "1px solid whitesmoke";
        } else if(!gridVisible) {
            widthOrHeight = `${(parseInt(GRID_WIDTH) / rowsAndCols)}px`;
            GRID_CELL.style.border = "none";
        }

        GRID_CELL.style.width = GRID_CELL.style.height = widthOrHeight;

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
    rowsAndCols = this.value;
    SLIDER_VALUE.textContent = `${this.value} x ${this.value} (Resolution)`;
    removeGridCells();
    createGridCells();
}
SLIDER_VALUE.textContent = `${SLIDER.value} x ${SLIDER.value} (Resolution)`;

GRID_TOGGLE.addEventListener("click", toggleGrid); //Toggles the grid on click event.

createGridCells();