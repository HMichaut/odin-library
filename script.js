let myLibraryJSON = localStorage.getItem('testObject');
let myLibrary = [];

if (myLibraryJSON !== null) {
  for (let i = 0; i < JSON.parse(myLibraryJSON).length; i++) {
    item = JSON.parse(myLibraryJSON)[i];
    myLibrary.push(new Book(item.title, item.author, item.pages, item.read));
  }
}


function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
  localStorage.setItem('testObject', JSON.stringify(myLibrary));
}

function createHeaders(table) {
  let orderArrayHeader = ["Title","Author","Pages","Read?", "Delete", "Read!"];
  let thead = document.createElement('thead');
  table.appendChild(thead);
  
  for(var i=0;i<orderArrayHeader.length;i++){
    const th = thead.appendChild(document.createElement("th"));
    th.appendChild(document.createTextNode(orderArrayHeader[i]));
    th.style.border = '1px solid black';
  }
}

function fillCells (tbody) {
  for (let i = 0; i < myLibrary.length; i++) {
    const tr = tbody.insertRow();
    Object.keys(myLibrary[i]).forEach(function(key, j) {
      const td = tr.insertCell();
      td.appendChild(document.createTextNode(myLibrary[i][key]));
      td.style.border = '1px solid black';
    });
    const td_delete = tr.insertCell();
    td_delete.addEventListener("click", () => {
      deleteCell(i);
      insertAllBooksInLibraryInTable();
    });
    td_delete.style.background = 'red';
    td_delete.style.border = '1px solid black';
    const td_change_read = tr.insertCell();
    td_change_read.addEventListener("click", () => {
      changeReadCell(i);
      insertAllBooksInLibraryInTable();
    });
    td_change_read.style.background = 'green';
    td_change_read.style.border = '1px solid black';
  }
}

function deleteCell(cell_id) {
  myLibrary.splice(cell_id, 1);
  localStorage.setItem('testObject', JSON.stringify(myLibrary));
}

function changeReadCell(cell_id) {
  myLibrary[cell_id].read = true;
  localStorage.setItem('testObject', JSON.stringify(myLibrary));
}

function insertAllBooksInLibraryInTable() {
  let tbl = document.getElementById("library_tbl");
  const tbl_div = document.getElementById("tbl_div");

  if (tbl == null) {
    tbl = document.createElement('table');
    createHeaders(tbl)
    let new_tbody = tbl.appendChild(document.createElement('tbody'));
    tbl.setAttribute('id', 'library_tbl');
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';
    fillCells(new_tbody)
    tbl_div.appendChild(tbl);
  } else {
    let new_tbody = tbl.appendChild(document.createElement('tbody'));
    let old_tbody = document.getElementsByTagName("tbody")[0];
    fillCells (new_tbody);
    old_tbody.parentNode.replaceChild(new_tbody, old_tbody);
  }
}

function deleteForm() {
  let new_form = document.body.appendChild(document.createElement('p'));
  new_form.setAttribute('id', 'frm_dwn');
  let old_form = document.getElementById("frm_dwn");
  old_form.parentNode.replaceChild(new_form, old_form);
}

function createForm() {
  let down = document.getElementById("frm_dwn");
              
  // Create a break line element
  let br = document.createElement("br"); 
  function frm_crt_fun() {
                
    // Create a form synamically
    let form = document.createElement("form");

    let label_title = document.createElement("Label");
    label_title.innerHTML="Book Title";

    // Create an input element for title
    let frm_title = document.createElement("input");
    frm_title.setAttribute("type", "text");
    frm_title.setAttribute("name", "title");
    frm_title.setAttribute("placeholder", "book name");

    let label_author = document.createElement("Label");
    label_author.innerHTML="Author Name";

    // Create an input element for author
    let frm_author = document.createElement("input");
    frm_author.setAttribute("type", "text");
    frm_author.setAttribute("name", "author");
    frm_author.setAttribute("placeholder", "book author");

    let label_pages = document.createElement("Label");
    label_pages.innerHTML="Pages Number";

    // Create an input element for pages
    let frm_pages = document.createElement("input");
    frm_pages.setAttribute("type", "number");
    frm_pages.setAttribute("name", "pages");

    let label_read = document.createElement("Label");
    label_read.innerHTML="Book Read?";

    // Create an input element for read
    let frm_read = document.createElement("input");
    frm_read.setAttribute("type", "checkbox");
    frm_read.setAttribute("name", "read");

    // create a submit button
    let s = document.createElement("button");
    
    s.setAttribute("type", "button");
    s.innerHTML = "Add Book";
                  
    // Append the full name input to the form
    form.appendChild(label_title);
    form.appendChild(br.cloneNode()); 
    form.appendChild(frm_title); 
      
    // Inserting a line break
    form.appendChild(br.cloneNode()); 
    form.appendChild(br.cloneNode()); 
      
    // Append the DOB to the form
    form.appendChild(label_author);
    form.appendChild(br.cloneNode()); 
    form.appendChild(frm_author); 

    // Inserting a line break
    form.appendChild(br.cloneNode()); 
    form.appendChild(br.cloneNode()); 
      
    // Append the emailID to the form
    form.appendChild(label_pages);
    form.appendChild(br.cloneNode()); 
    form.appendChild(frm_pages); 

    // Inserting a line break
    form.appendChild(br.cloneNode()); 
    form.appendChild(br.cloneNode()); 
      
    // Append the Password to the form
    form.appendChild(label_read);
    form.appendChild(br.cloneNode());
    form.appendChild(frm_read); 

    // Inserting a line break
    form.appendChild(br.cloneNode()); 
    form.appendChild(br.cloneNode()); 
      
    // Append the submit button to the form
    form.appendChild(s);
    s.addEventListener("click", () => {
      addBookToLibrary(frm_title.value, frm_author.value, frm_pages.value, frm_read.checked);
      insertAllBooksInLibraryInTable();
      deleteForm();
    });

    down.appendChild(form);
  }
  frm_crt_fun()
}

// addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
// addBookToLibrary('test title', 'test author', 15, true);
insertAllBooksInLibraryInTable();
