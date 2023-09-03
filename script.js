const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read ? 'already read' : 'not read yet'}`;
    }
}

function addToLibrary(book) {
    myLibrary.push(book);
}

const thehobbit = new Book('The Hobbit','J.R.R. Tolkien',295,false);
const inception = new Book('Inception','unknown',350,false);
const hp1 = new Book('Harry Potter and the Philosophers stone','J.K. Rowling',350,true);
// console.log(thehobbit.info());
addToLibrary(thehobbit);
addToLibrary(inception);
addToLibrary(hp1);
// console.table(myLibrary);
const libraryDOM = document.querySelector('.rows');

const buttonAdd = document.querySelector('button');
const buttonClose = document.querySelector('.close');
console.log(buttonAdd);
const modal = document.querySelector('.modal');
const modalClose = modal.querySelector('.modalClose');
const sidebar = modal.querySelector('.sidebar')
function modalEscape() {
    modal.classList.remove('unhide');
    modal.classList.remove('active');
}
// modalClose.addEventListener('click', () => {
//     modal.classList.remove('unhide');
//     sidebar.classList.remove('active');
// })
buttonAdd.addEventListener('click', () => {
    modal.classList.add('unhide');
    sidebar.classList.add('active');
});
modalClose.addEventListener('click', modalEscape);
buttonClose.addEventListener('click', modalEscape);

const form = document.getElementById('addNewRowForm');

form.addEventListener('submit', callbackFunction);
function callbackFunction(event) {
    event.preventDefault();
    const formDataObj = {};
    for (let index = 0; index < event.target.elements.length-1; index++) {
        formDataObj[event.target.elements[index].id] = event.target.elements[index].value;
    }
    addToLibrary(new Book(formDataObj.title,formDataObj.author,formDataObj.pages,formDataObj.read));
    // console.log(formDataObj);
    // console.log(myLibrary);
    updateLibrary();
};

function updateLibrary() {
    const tableItems = document.getElementsByClassName('row');
    while(tableItems.length > 0){
        while (tableItems[0].firstChild) {
            tableItems[0].removeChild(tableItems[0].firstChild);
          }
        tableItems[0].remove();
    }
    myLibrary.forEach(book => {
        let tr = document.createElement('tr');
        tr.classList.add('row');
        let tdTitle = document.createElement('td');
        tdTitle.appendChild(document.createTextNode(book.title));
        let tdAuthor = document.createElement('td');
        tdAuthor.appendChild(document.createTextNode(book.author));
        let tdPages = document.createElement('td');
        tdPages.appendChild(document.createTextNode(book.pages));
        let tdRead = document.createElement('td');
        tdRead.appendChild(document.createTextNode(book.read));
        tr.appendChild(tdTitle);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdPages);
        tr.appendChild(tdRead);
        libraryDOM.appendChild(tr);
    });
}
updateLibrary();