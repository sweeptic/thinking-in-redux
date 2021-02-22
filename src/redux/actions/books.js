//feature name
const BOOKS = '[Books]';

// action_types;
export const FETCH_BOOKS = 'FETCH_BOOKS';
export const SET_BOOKS = 'SET_BOOKS';

//action creators
export const fetchBooks = ({ query }) => ({
  type: FETCH_BOOKS,
  payload: query,
});

export const setBooks = ({ books }) => ({
  type: SET_BOOKS,
  payload: books,
});
