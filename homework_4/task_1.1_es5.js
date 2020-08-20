  'use strict'
    
function Product_es5(name, price){
    this.name = name;
    this.price = price;
}

Product_es5.prototype.make25PercentDiscount = function () {
    this.price = this.price * 0.75;
}

const product_1 = new Product_es5('холодильник', 22110);
const product_2 = new Product_es5('чайник', 5550);

product_1.make25PercentDiscount();
product_2.make25PercentDiscount();
    
console.log(product_1, product_2);

