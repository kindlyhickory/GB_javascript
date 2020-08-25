'use strict'

const body_el = document.querySelector('body');

let cols_rows = {
    cols: ['A', 'B', 'C' , 'D', 'E', 'F', 'G', 'H'],
    rows: [8, 7, 6, 5, 4, 3, 2, 1]
};

function start(cols_rows) {

    let board = '';
    let start_color = 'white';
    for (let i =0; i < cols_rows.rows.length; i++){
        let row = '';
        if (start_color === 'white') {
            row = row_generator(start_color, cols_rows.rows[i]);
            start_color = 'black';
        } else {
            row = row_generator(start_color, cols_rows.rows[i]);
            start_color = 'white';
        }
        board += row;
    }
    return `<table>${board}</table>`
};

function row_generator(color, row_number) {
    let row = '';
    let current_color = color;
    for(let i = 0; i < cols_rows.cols.length; i++) {
        let cell = '';
        if (current_color === 'white') {
            cell = cell_generator('white', row_number, cols_rows.cols[i]);
            current_color = 'black'
        } else {
            cell = cell_generator('black', row_number, cols_rows.cols[i]);
            current_color = 'white'
        }
        row += cell;
    };
    return `<tr>${row}</tr>`
};

function cell_generator(color, row_number, col_char){
    return `<td class = "${color}" row_num="${row_number}" col_ch ="${col_char}"></td>`;
};

function rows (){
    let trs = document.querySelectorAll('tr');
    for(let i = 0; i < trs.length; i++){
        let td = document.createElement('td');
        td.innerText = cols_rows.rows[i];
        trs[i].insertAdjacentElement('afterbegin', td);
    }
}

function cols (){
    let tr = document.createElement('tr');
    tr.innerHTML += '<td></td>';
    for (let i = 0; i < cols_rows.cols.length; i++){
        tr.innerHTML += `<td>${cols_rows.cols[i]}</td>`;
    }
    let table = document.querySelector('table');
    table.insertAdjacentElement("beforeend", tr);
}

let result = start(cols_rows);

document.body.innerHTML = result;

rows();
cols();



