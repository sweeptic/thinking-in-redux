// feature selector
const getBooks = state => state.books.collection;
const getBookCount = state => state.books.count;
const getBooksLoading = state => state.books.loading;
const getSelectedBookId = state => state.books.selected;

// Selected book selector
const getSelectedBook = state => {
  const books = getBooks(state);
  const bookId = getSelectedBookId(state);

  return books[bookId];
};

// Structure transform selector
const getBooksArray = state => {
  const books = getBooks(state);

  return Object.keys(books).reduce((bookArray = [], bookId) => {
    bookArray.push(books[bookId]);
    return bookArray;
  }, []);
};

// filtering selectors
const getBooksArray_smaller = state => {
  const books = getBooks(state);

  return Object.keys(books).reduce((bookArray = [], bookId) => {
    const { title, id, author, published } = books[bookId];

    bookArray.push({ id, title, author, published });
    return bookArray;
  }, []);
};
