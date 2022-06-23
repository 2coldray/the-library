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
let idCounter = 0
//console.log(myLibrary);

function addBookToLibrary(title, author, pages, read) {
    idCounter++;
    const myBook = new Book(title, author, pages, read);
    myBook.id = idCounter;
    console.log(myBook);
    myLibrary.push(myBook);
}

//addBookToLibrary('The Cat in the Hat', 'Dr. Seuss', 20, 'read');
//addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet');



// Function Add books to Page
const container = document.querySelector('.container');
const cards = document.querySelector('.cards');
let counter = 0;

function addBookToPage() {
    // gather all books
    const books = document.querySelectorAll('.card');
    // clear the div
    books.forEach(book => cards.removeChild(book));
    // create and display boooks
    myLibrary.forEach(book =>  {
        createAndDisplayBook(book);
    })
};


//addBookToPage();

// Bring in add button and submit button
const addNewBookBtn = document.getElementById('add');
const submitFormBtn = document.getElementById('sub');
const formElement = document.querySelector('form');
const formDiv = document.querySelector('.form-div');
const closeBtn = document.getElementById('close');
const removeBtn = document.getElementById('remove');

// event listener calls
addNewBookBtn.addEventListener('click', displayForm);
submitFormBtn.addEventListener('click', submitBook);
closeBtn.addEventListener('click', hideForm);



// function to display form
function displayForm() {
    formDiv.style.display = 'block';
}

// function to hide Form
function hideForm(event) {
    event.preventDefault();
    formDiv.style.display = 'none';
}

// submit book function
function submitBook(event) {
    // dont always reload or submit the page
    event.preventDefault();
    // get form inputs
    const bookTitle = document.getElementById('bookTitle').value;
    const bookAuthor = document.getElementById('bookAuthor').value;
    const bookPages = document.getElementById('bookPages').value;
    const read = document.getElementById('read').value;
    // add book to the array
    addBookToLibrary(bookTitle, bookAuthor, bookPages, read);
    console.log(myLibrary);
    // clear inputs
    formElement.reset();
    // hide the form after the book has been added
    //hideForm();
    //addBookToPage();
    addBookToPage();
}

// function create book
function createAndDisplayBook(book) {
    counter++;
    //console.log(myLibrary[i]);
  // create a div for cards and card, h1 for title, h2 for author, h3 for pages, and p for read
    // const cardDiv = document.createElement('div');
     // add class to card div
    // cardDiv.classList.add('cards');
    // make card to go inside div
    const card = document.createElement('div');
    card.classList.add('card');
    // make status div to go inside card
    const statusDiv = document.createElement('div');
    statusDiv.classList.add('status');
    // remaining elements to create
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    // add the content to h1, h2, h3, p
    h1.textContent = book.title;
    h2.textContent = book.author;
    h3.textContent = book.pages;
    //p.textContent = myLibrary[i].read;
    
    if (myLibrary.read === 'on') {
        readBtn.textContent = 'Read';
        readBtn.setAttribute('id', 'toggle');
    } else {
        readBtn.textContent = 'Not Read';
        readBtn.setAttribute('style', 'background-color: orange');
    }

    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('goodbye');
    removeBtn.setAttribute('id', 'remove');

    // Append buttons to div
    statusDiv.append(readBtn, removeBtn);

    // Append status div, h1 h2 h3  to card
    card.append(h1, h2, h3, statusDiv);

    // Append card to cards div
    cards.appendChild(card);
}