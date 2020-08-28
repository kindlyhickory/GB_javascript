'use strict'

let button_open = document.querySelector('.button_to_open');
let button_close = document.querySelector('.btn_to_close');

button_open.addEventListener('click', function (event){
    document.querySelector('.window').classList.remove('puffOut')
    document.querySelector('.window').classList.remove('hidden');
    document.querySelector('.window').classList.add('magictime', 'puffIn');
});

button_close.addEventListener('click', function (event){
    document.querySelector('.window').classList.remove('puffIn');
    document.querySelector('.window').classList.add('puffOut');
    setTimeout(function() {
        document.querySelector('.window').classList.add('hidden');
    }, 1000);
});