// src/Author.ts

export interface Author {
    name: string;
    birthDate: Date;
  }
  
  export class Author implements Author {
    constructor(public name: string, public birthDate: Date) {}
  }
  