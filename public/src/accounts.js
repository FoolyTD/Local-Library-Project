//This function takes in an array of accounts and a search ID and returns the first object in accounts
//  that matches the search ID
function findAccountById(accounts, searchID) {
  return accounts.find((accounts)=> accounts.id == searchID);
};

//Takes in an array of account objects and returns a sorted array by last name
function sortAccountsByLastName(accounts) {
  let sortedAccounts = accounts.sort((accountA,accountB)=> accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1: -1);
  return sortedAccounts;
};

//Function takes in and array of accounts and books and returned the number of times a book has been borrowed
function numberOfBorrows(account, books) {
  total = 0;
  books.forEach(function(book){
    book.borrows.reduce((accumulator,borrow)=> {
      if(borrow.id===account.id) {
        total++;
      }
    })
  });
  return total;
};

//Takes in three parameters: account, books, and authors. Returns an array of book objects
function getBooksPossessedByAccount(account, books, authors) {
  const result = [];

  books.filter((book) => {
    book.borrows.forEach(function(borrow){
      if(borrow.id == account.id && borrow.returned == false) {
        const temp = Object.assign(book, {author: getAuthorById(book.authorId,authors)});
        result.push(temp);
      }
    });
  });
  return result;
};

function getAuthorById(id, authors) {
  return authors.find((author) => author.id === id);
};

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
