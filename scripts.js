function createGrid(rows, columns) {    
    for (r = 1; r <= rows; r++) {
        const grid = document.querySelector('.mainGrid');
        const row = document.createElement('div');
        row.setAttribute('id',`row-${r}`);
        row.setAttribute('class', 'row');
        grid.appendChild(row);
         };
    for (i = 1; i <= rows; i++) {
        for (c = 1; c <= columns; c++) {
            const gridRow = document.querySelector(`#row-${i}`);
            const gridSquare = document.createElement('div')
            gridSquare.setAttribute('class','gridSquare')
            gridSquare.textContent = 'X'
            gridRow.appendChild(gridSquare);
        };
    };
};

createGrid(16,16);
