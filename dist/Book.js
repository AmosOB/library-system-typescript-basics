"use strict";
// src/Book.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, author, publicationDate, available) {
        if (available === void 0) { available = true; }
        this.title = title;
        this.author = author;
        this.publicationDate = publicationDate;
        this.available = available;
    }
    return Book;
}());
exports.Book = Book;
