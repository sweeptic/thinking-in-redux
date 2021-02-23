import {
  REMOVE_BOOKS,
  SELECT_BOOKS,
  SET_BOOKS,
  UPDATE_BOOKS,
} from '../actions/books';

const initState = [];

export const booksReducer = (books = initState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return action.payload;

    case UPDATE_BOOKS:
      return books;

    case SELECT_BOOKS:
      return books;

    case REMOVE_BOOKS:
      return books;

    default:
      return books;
  }
};

// select from state (read)
export const getBooksIds = state => Object.keys(state.books.collection);
// export const getSelectedBook = state =>
// state.books.selected[state.books.selectedBookId];

// feature selector
export const getBooks = state => state.books.collection;
export const getBookCount = state => state.books.count;
export const getBooksLoading = state => state.books.loading;
export const getSelectedBookId = state => state.books.selected;

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
