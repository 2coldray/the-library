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


// Function Add books to Page
const container = document.querySelector('.container');

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

        // add the content to h1, h2, h3, p
        h1.textContent = myLibrary[i].title;
        h2.textContent = myLibrary[i].author;
        h3.textContent = myLibrary[i].pages;
        p.textContent = myLibrary[i].read;

        // append elements to div
        cardDiv.append(h1, h2, h3, p);

        // append elements to the page
        container.appendChild(cardDiv);
    }
};

//addBookToPage();