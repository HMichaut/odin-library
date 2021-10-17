let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    let status = read ? "already read" : "not read yet";
    return title + " by " + author + ", " + pages + "pages, " + status;
  }
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

function logAllBooksInLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].info());
  }
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false)
addBookToLibrary('test title', 'test author', 15, true)

logAllBooksInLibrary()
