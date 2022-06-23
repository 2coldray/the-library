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
//console.log(myLibrary);

function addBookToLibrary(title, author, pages, read) {
    const myBook = new Book(title, author, pages, read);
    console.log(myBook);
    myLibrary.push(myBook);
    console.log(myLibrary);
}

//addBookToLibrary('The Cat in the Hat', 'Dr. Seuss', 20, 'read');
//addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet');



// Function Add books to Page
const container = document.querySelector('.container');
const cards = document.querySelector('.cards');

function addBookToPage() {
    // loop over the myLibrary array
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
        // create a div for card, h1 for title, h2 for author, h3 for pages, and p for read
        const cardDiv = document.createElement('div');
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const btn = document.createElement('button');

        // add the content to h1, h2, h3, p
        h1.textContent = myLibrary[i].title;
        h2.textContent = myLibrary[i].author;
        h3.textContent = myLibrary[i].pages;
        p.textContent = myLibrary[i].read;
        btn.textContent = 'Remove';

        // append elements to div
        cardDiv.append(h1, h2, h3, p, btn);

        // append elements to the page
        cards.appendChild(cardDiv);
    }
};

//addBookToPage();

// Bring in add button and submit button
const addNewBookBtn = document.getElementById('add');
const submitFormBtn = document.getElementById('sub');
const formElement = document.querySelector('form');
const formDiv = document.querySelector('.form-div');
const closeBtn = document.getElementById('close');

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
    // clear inputs
    formElement.reset();
    // hide the form after the book has been added
    //hideForm();
}

