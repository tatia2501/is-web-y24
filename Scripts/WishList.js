window.onload = loadBooks;

document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    addBook();
});

function showBook(list, book, title) {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" onclick="bookPurchased(this)" class="wishlist_check" ${book.purchased ? 'checked' : ''} >
     <div class="wishlist_book ${book.purchased ? 'purchased' : ''}">${title}</div>
     <i onclick="removeBook(this)">удалить</i>`;
    list.insertBefore(li, list.children[0]);
}

function loadBooks() {
    if (localStorage.getItem("books") == null) return;
    let books = Array.from(JSON.parse(localStorage.getItem("books")));

    const list = document.querySelector("ul");
    books.forEach(book => {
        let title = book.book;
        showBook(list, book, title)
    });
}

function addBook() {
    const book = document.querySelector("form input");
    const list = document.querySelector("ul");

    localStorage.setItem("books", JSON.stringify([...JSON.parse(localStorage.getItem("books") || "[]"), { book: book.value, purchased: false }]));

    let title = book.value;
    showBook(list, book, title)

    book.value = "";
}

function bookPurchased(event) {
    let books = Array.from(JSON.parse(localStorage.getItem("books")));
    books.forEach(book => {
        if (book.book === event.nextElementSibling.textContent) {
            book.purchased = !book.purchased;
        }
    });
    localStorage.setItem("books", JSON.stringify(books));
    event.nextElementSibling.classList.toggle("purchased");
}

function removeBook(event) {
    let books = Array.from(JSON.parse(localStorage.getItem("books")));
    books.forEach(book => {
        if (book.book === event.parentNode.children[1].textContent) {
            books.splice(books.indexOf(book), 1);
        }
    });
    localStorage.setItem("books", JSON.stringify(books));
    event.parentElement.remove();
}