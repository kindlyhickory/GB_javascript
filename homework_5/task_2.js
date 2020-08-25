'use strict'

const buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
    button.addEventListener('click', function (event) {
        click_handler(event);
    });
});

function click_handler(clicked_button){
    const product_of_button = clicked_button.target.parentNode;
    
    const product = {
        main: product_of_button,
        img: product_of_button.querySelector('img'),
        product_name: product_of_button.querySelector('.productName'),
        button: product_of_button.querySelector('button')
    }

    const button_text = product.button.innerText;

    if (button_text === 'Подробнее'){
        show(product);
    }
    else if (button_text === 'Закрыть'){
        hide(product);
    }
};

function show(product){
    product.img.style.display = 'none';
    product.main.querySelector('.desc').innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, similique eius ullam in maxime accusantium consectetur numquam voluptates recusandae tempora?';;
    product.button.innerText = 'Закрыть';
};

function hide(product){
    product.img.style.display = 'block';
    product.main.querySelector('.desc').innerText = ''
    product.button.innerText = "Подробнее";
};

