const { Media } = require("./Media.js");

class Book extends Media {
    constructor(title, year, genre, author, numPages, rating){
        super(title, year, genre);
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
    }

    summary(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
    }

    static highestRating(books){
        let book = books[0];

        for (let index = 1; index < books.length; index++) {
            if (books[index].rating > book.rating) {
                book = books[index];
            }
        }

        return book;
    }
}

module.exports = {
    Book
}