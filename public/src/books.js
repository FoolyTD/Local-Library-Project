function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks = books.filter((book) => book.borrows[0].returned == false);
  let returnedBooks = books.filter((book) => book.borrows[0].returned == true);
  return [borrowedBooks, returnedBooks];
};

function getBorrowersForBook(book, accounts) {
  let total = 0;
  let result = [];
  accounts.map((account) => {
    book.borrows.forEach((borrow) => {
      if (borrow.id === account.id && borrow.returned === true && total < 10) {
        (borrow.returned === true) ? Object.assign(account, {returned: true}) : null;
        total++;
        result.push(account);
      }
    });
  });
  return result;
}

function groupBy(arr, groupBy){ 
  return arr.reduce((total, item)=>{ 
    if(!total[key]){
        total[key]=[];      
    }
    total[key].push(item);
    return total;
},{});
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
  groupBy
};
