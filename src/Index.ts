// src/index.ts

import { Author } from './Author';
import { Book } from './Book';
import { Library } from './Library';

const library = new Library();

const author1 = new Author('J.K. Rowling', new Date('1965-07-31'));
const book1 = new Book('Harry Potter and the Philosopher\'s Stone', author1, new Date('1997-06-26'));

const author2 = new Author('J.R.R. Tolkien', new Date('1892-01-03'));
const book2 = new Book('The Hobbit', author2, new Date('1937-09-21'));

library.addBook(book1);
library.addBook(book2);

console.log('List of books in the library:');
library.listBooks();

console.log('\nBorrowing "The Hobbit":');
library.borrowBook('The Hobbit');
library.listBooks();

console.log('\nReturning "The Hobbit":');
library.returnBook('The Hobbit');
library.listBooks();
