// src/Book.ts

import { Author } from './Author';

export interface Book {
  title: string;
  author: Author;
  publicationDate: Date;
  available: boolean;
}

export class Book implements Book {
  constructor(
    public title: string,
    public author: Author,
    public publicationDate: Date,
    public available: boolean = true
  ) {}
}
