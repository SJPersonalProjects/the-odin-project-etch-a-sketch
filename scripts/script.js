// Total width of the grid.
const GRIDSIZE = 600;

// Default grid of 16x16 dimensions.
let rowsAndCols = 16;


const SKETCH_AREA = document.querySelector("#sketch-area");
// Chained assignment.
SKETCH_AREA.style.width = SKETCH_AREA.style.height = `${GRIDSIZE}px`;

/**
 * Function to create the grid cells.
 */
function createGridCells() {
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


createGridCells();