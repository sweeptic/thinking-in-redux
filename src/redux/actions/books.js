//feature name
export const BOOKS = '[Books]';

// action_types;
export const FETCH_BOOKS = `${BOOKS} FETCH`;
export const SET_BOOKS = `${BOOKS} SET`;
export const UPDATE_BOOKS = `${BOOKS} UPDATE`;
export const SELECT_BOOKS = `${BOOKS} SELECT`;
export const REMOVE_BOOKS = `${BOOKS} REMOVE`;
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
