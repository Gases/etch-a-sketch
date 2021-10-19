function generateGrid(size = 10, gridClass = 'grid-10x10') {
    let grid = document.querySelector('.grid');
    grid.innerHTML = '';
    grid.classList.remove('grid-10x10','grid-20x20','grid-30x30','grid-40x40');
    grid.classList.add(gridClass);

    for (let i = 0; i < size ** 2; i++) {
        let div = document.createElement('div');
        div.classList.add('grid-element');
        grid.appendChild(div);
    }

    gridColors();
}

function changeGrid() {
    let gridButton = document.querySelectorAll('.controls > button');
    gridButton.forEach(button => button.addEventListener('click', e => {
        if (e.target.classList.contains('10x10')) {
            generateGrid(10, 'grid-10x10');
        } else if (e.target.classList.contains('20x20')) {
            generateGrid(20, 'grid-20x20');
        } else if (e.target.classList.contains('30x30')) {
            generateGrid(30, 'grid-30x30');
        } else {
            generateGrid(40, 'grid-40x40');
        }
    }));
}

function gridColors() {
    let gridElement = document.querySelectorAll('.grid > div');
    gridElement.forEach(element => element.addEventListener('mouseenter', e => {
        e.target.classList.add('black');
    }));
}

generateGrid();
changeGrid();
gridColors();