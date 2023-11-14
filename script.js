const body = document.querySelector('body');
const container = document.getElementById('container');
body.appendChild(container);
const resetBtn = document.querySelector('.reset');
const gridSizeBtn = document.querySelector('.grid-size');
const numCellsText = document.querySelector('.cell-count');

// default grid size
let cellSize = 60;
let gridSides = 16;
let containerSize = container.clientWidth;

// set all cells to black
resetBtn.addEventListener('click', () => {
    const cells = [...document.querySelectorAll('.cell')];
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = 'black';
    }
})

// button to change number of grid sides
gridSizeBtn.addEventListener('click', () => {
    gridSides = +prompt('Enter number of grid sides: ', 16);
    drawGrid(gridSides);
})

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function drawGrid(sides) {
    clearGrid();
    container.style.gridTemplateRows = `repeat(${sides}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${sides}, 1fr)`;

    for (let i = 0; i < sides; i++) {
        for (let j = 0; j < sides; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            container.appendChild(cell);

            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = 'gray';
            })

            cell.addEventListener('dblclick', () => {
                cell.style.backgroundColor = 'pink';
            })
        }
    }

    cellSize = containerSize / gridSides;
    numCellsText.textContent = `${gridSides}`;
}

// initialize
drawGrid(gridSides);