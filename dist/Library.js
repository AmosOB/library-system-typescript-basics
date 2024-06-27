"use strict";
// src/Library.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.listBooks = function () {
        this.books.forEach(function (book) {
            console.log("Title: ".concat(book.title, ", Author: ").concat(book.author.name));
        });
    };
    Library.prototype.borrowBook = function (title) {
        var book = this.books.find(function (b) { return b.title === title && b.available; });
        if (book) {
            book.available = false;
            return true;
        }
        return false;
    };
    Library.prototype.returnBook = function (title) {
        var book = this.books.find(function (b) { return b.title === title && !b.available; });
        if (book) {
            book.available = true;
            return true;
        }
        return false;
    };
    return Library;
}());
exports.Library = Library;
