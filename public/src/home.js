const {sortSlice} = require("./helper");
const {findAuthorById} = require("./books");

function totalBooksCount(books) {
  return books.length;
}
function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
  let count = 0;
  books.filter((book)=> {
    book.borrows.forEach((borrow)=> {
      if (borrow.returned == false) {
        count++;
      }
    })
  })
  return count;
}

function getMostCommonGenres(books) {
  const genres = [];
  let genreObject = {};
  books.forEach((book) => {
    if(genreObject[book.genre]){
      genreObject[book.genre]++;
    } else {
      genreObject[book.genre] = 1;
    }
  });
  const keys = Object.keys(genreObject);
  const values = Object.values(genreObject);
  for (key in keys) {
    genres[key] = {name:keys[key],count:values[key]}
  }
  // for (let i = 0; i < keys.length; i++) {
 //   genres[i] = {name:keys[i],count:values[i]};
 // }
  return sortSlice(genres,5);
};

function getMostPopularBooks(books) {
  let booksObjectArray = [];
  for(let i = 0; i < books.length; i++) {
    booksObjectArray[i] = {name:books[i].title,count:books[i].borrows.length};
  };
  return sortSlice(booksObjectArray,5);
};

function getMostPopularAuthors(books, authors) {
  const booksObjectArray = [];
  for(let i = 0; i < books.length; i++) {
    const author = findAuthorById(authors, books[i].authorId);
    const authorNameMerge = [author.name.first, author.name.last];
    booksObjectArray[i] = {name: `${authorNameMerge.join(' ')}`, count: books[i].borrows.length};
  };
  return sortSlice(booksObjectArray,5);
};

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
