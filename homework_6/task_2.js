'use strict'

let buttons = document.querySelectorAll('.toBasketBtn');

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        let id = event.target.getAttribute('data-id');
        let price = event.target.getAttribute('data-price');
        let name = event.target.getAttribute('data-name');
        basket.addProduct({id: id, price : price, name: name});
    });
});

let basket = {
    products: {},

    addProduct(product) {
        this.addToProducts(product);
        this.showInBasket(product);
        this.setBasketPrice(product);
        this.removeBtns();
    },
    addToProducts(product) {
        if (this.products[product.id] == undefined) {
            this.products[product.id] = {
                price: product.price,
                name: product.name,
                count: 1
            }
        } else {
            this.products[product.id].count++;
        }
    },

    showInBasket(product){
        let productExist = document.querySelector(`.productCount[data-id="${product.id}"]`);
        if (productExist) {
            productExist.textContent++;
            return;
        }
        let productRow = `
            <tr>
                <th scope="row">${product.id}</th>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td class="productCount" data-id="${product.id}">1</td>
                <td><i class="fas fa-trash-alt productRemoveBtn" data-id="${product.id}"
                data-name="${product.name}"
                data-price="${product.price}"></i></td>
            </tr>
        `;
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML("beforeend", productRow);
    },
    setBasketPrice(product) {
        let totalPrice = document.querySelector('.total');
        totalPrice.innerHTML = Number(totalPrice.innerHTML) + Number(product.price);
    },
    removeBtns() {
        let removeButtons = document.querySelectorAll('.productRemoveBtn');
        removeButtons.forEach(function(removeBtn) {
            removeBtn.addEventListener('click', function (event) {
                let id = event.target.getAttribute('data-id');
                let price = event.target.getAttribute('data-price');
                let name = event.target.getAttribute('data-name');
                basket.removeProduct({id:id , price: price, name: name});
            })
        });
    },
    removeProduct(productToRemove) {
        let countId = document.querySelector(`.productCount[data-id="${productToRemove.id}"]`)
        let totalPrice = document.querySelector('.total');
            if(countId.textContent == 1) {
                countId.parentNode.remove();
                delete this.products[productToRemove.id];
            } else {
                countId.textContent--;
                this.products[productToRemove.id].count--;
            }
        totalPrice.innerHTML = Number(totalPrice.innerHTML) - Number(productToRemove.price);
    } 
};

