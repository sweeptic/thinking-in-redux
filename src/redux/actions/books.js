//feature name
export const BOOKS = '[Books]';

// action_types;
export const FETCH_BOOKS = `${BOOKS} FETCH`;
export const SET_BOOKS = `${BOOKS} SET`;
export const UNDO = `UNDO`;

//action creators
export const fetchBooks = ({ query }) => ({
  type: FETCH_BOOKS,
  payload: query,
});

export const setBooks = ({ books, normalizeKey }) => ({
  type: SET_BOOKS,
  payload: books,
  meta: { normalizeKey, feature: BOOKS },
});

export const undoBooks = ({ query }) => ({
  type: UNDO,
  payload: query,
});
