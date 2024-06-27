// src/Library.ts

import { Book } from './Book';

export class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  listBooks(): void {
    this.books.forEach(book => {
      console.log(`Title: ${book.title}, Author: ${book.author.name}`);
    });
  }

  borrowBook(title: string): boolean {
    const book = this.books.find(b => b.title === title && b.available);
    if (book) {
      book.available = false;
      return true;
    }
    return false;
  }

  returnBook(title: string): boolean {
    const book = this.books.find(b => b.title === title && !b.available);
    if (book) {
      book.available = true;
      return true;
    }
    return false;
  }
}
