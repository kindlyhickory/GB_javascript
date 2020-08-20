'use strict'

class Post_2 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text_to_add) {
        this.text = this.text + ' ' + text_to_add;
    }
}

class Attached_post_2 extends Post_2 {
    constructor(author,text,date,highlighted){
        super(author,text,date);
        this.highlighted = false;
    }

    make_text_highlighted() {
        this.highlighted = true;
    }
}

const author_3 = new Post_2('Петя', 'brains', '31.08');

const author_4 = new Attached_post_2('Дима', 'brains', '20.08');

console.log(author_3);
console.log(author_4);
author_3.edit('geek');
author_4.edit('GEEK');
author_4.make_text_highlighted();
console.log(author_3);
console.log(author_4);