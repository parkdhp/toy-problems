/**Online Book Reader
 * Design the data structures for an online book reader system
 */

class Book {
  constructor(name, file) {
    this.name = name;
    this.file = file;
  }
}
class BookReader {
  constructor() {
    this.currBook = null;
    this.books = {};
  }
  add(book) {
    this.books[book.name] = book;
  }
  find(bookname) {
    return this.books[bookname];
  }
  open(bookname) {
    this.currBook = this.books[bookname];
    return this.currBook
  }
}