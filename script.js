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
console.table(myLibrary);
const libraryDOM = document.querySelector('.rows');

myLibrary.forEach(book => {
    let tr = document.createElement('tr');
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

})

