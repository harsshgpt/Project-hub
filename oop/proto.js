class library{
    constructor(){
         this.book = [];
         
    }
    addbook(book){
        this.book.push(book.name);
    }
    
}
class book{
    constructor(name,author,price){
     this.name = name;
     this.author = author;
     this.price = price ;
    }
}
let b1 = new book("harshliffe","harsh",231);
let b2 = new book("shaym","ghjah",6464);

let l1 = new library();
l1.addbook(b2);
l1.addbook(b1);