'use strict'

class Product_es6 {
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price * 0.75;
    }
}

const product_3 = new Product_es6('холодильник', 22110);
const product_4 = new Product_es6('чайник', 5550);

product_3.make25PercentDiscount();
product_4.make25PercentDiscount();

console.log(product_3, product_4);