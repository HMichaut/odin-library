let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

function logAllBooksInLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].info());
  }
}

function createHeaders(table) {
  let orderArrayHeader = ["Title","Author","Pages","Read"];
  let thead = document.createElement('thead');
  table.appendChild(thead);
  
  for(var i=0;i<orderArrayHeader.length;i++){
    const th = thead.appendChild(document.createElement("th"));
    th.appendChild(document.createTextNode(orderArrayHeader[i]));
    th.style.border = '1px solid black';
  }
}

function fillCells (table) {
  for (let i = 0; i < myLibrary.length; i++) {
    const tr = table.insertRow();
    console.log(i)
    Object.keys(myLibrary[i]).forEach(function(key, j) {
      const td = tr.insertCell();
      td.appendChild(document.createTextNode(myLibrary[i][key]));
      td.style.border = '1px solid black';
    });
  }
}

function insertAllBooksInLibraryInTable() {
  const body = document.body,
        tbl = document.createElement('table');
  tbl.style.width = '100px';
  tbl.style.border = '1px solid black';
  createHeaders(tbl)
  fillCells (tbl)
  body.appendChild(tbl);
}


addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false)
addBookToLibrary('test title', 'test author', 15, true)

insertAllBooksInLibraryInTable()
