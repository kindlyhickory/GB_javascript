'use strict'

function Post(author, text, date){
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text_to_add) {
    this.text = this.text + ' ' + text_to_add;
}


function Attached_post(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;

}

Attached_post.prototype = Object.create(Post.prototype);
Attached_post.prototype.constructor = Attached_post;

Attached_post.prototype.make_text_highlighted = function (){
    this.highlighted = true;
}

const author_1 = new Post('Женя', 'geek', '31.08');

const author_2 = new Attached_post('Вася', 'geek', '20.08');


console.log(author_1);
console.log(author_2);
author_1.edit('brains');
author_2.edit('BRAINS');
author_2.make_text_highlighted();
console.log(author_1);
console.log(author_2)


