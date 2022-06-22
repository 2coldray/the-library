// Write a constructor for making Book Objects
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${title} by ${author}, ${pages}, ${read}`;
    }
}

// Create new object
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet');
console.log(theHobbit.info());

// Function that adds user books to an array
let myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
    const myBook = new Book(title, author, pages, read);
    myLibrary.push(myBook);
}

addBookToLibrary('The Cat in the Hat', 'Dr. Seuss', 20, 'read');
addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet');
console.log(myLibrary);