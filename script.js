const body = document.querySelector('body');
const container = document.querySelector('.container');
body.appendChild(container);
const resetBtn = document.querySelector('.reset');
const gridSizeBtn = document.querySelector('.grid-size');
const cellSizeBtn = document.querySelector('.cell-size');
const removeBtn = document.querySelector('.remove'); // test

let cellSize = 40;
let gridRows = 16;
let gridColumns = 16;

resetBtn.addEventListener('click', () => {
    const cells = [...document.querySelectorAll('.cell')];
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = 'black';
    }
})

// gridSizeBtn.addEventListener('click', () => {
//     gridRows = +prompt('Enter number of rows: ', 16);
//     gridColumns = +prompt('Enter number of columns: ', 16);
//     console.log('gridrows: ' + gridRows);
//     console.log('gridcols: ' + gridColumns);
//     drawGrid(gridRows, gridColumns);
// })

// cellSizeBtn.addEventListener('click', () => {
//     let size = +prompt('Enter cell size: ', 40);
//     cellSize = size + 'px';
//     console.log(cellSize + ', ' + typeof cellSize);
// })

// removeBtn.addEventListener('click', () => {
//     clearGrid();
// })

// function clearGrid() {
//     while (container.firstChild) {
//         container.removeChild(container.firstChild);
//     }
//     // change div container size
//     container.style.width = '0px';
//     container.style.height = '0px';
//     // also change border size
//     container.border = '0px';
// }

function drawGrid(rows, columns) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            container.appendChild(cell);

            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = 'blue';
            })

            cell.addEventListener('dblclick', () => {
                cell.style.backgroundColor = 'pink';
            })
        }
    }
}

drawGrid(gridRows, gridColumns);