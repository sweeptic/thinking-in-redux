import { BOOKS, FETCH_BOOKS, setBooks } from '../actions/books';
import { API_ERROR, API_SUCCESS, apiRequest } from '../actions/api';
import { setLoader } from '../actions/ui';
import { setNotification } from '../actions/notification';

const BOOKS_URL = 'https://www.googleapis.com/books/v1/volumes?q=redux';

export const booksMiddleware = () => next => action => {
  // We are calling next in the first line of our middleware body, before the action filtering (the switch
  // statement). We do this to keep our action log in order.
  next(action);

  // switch - action filtering
  switch (action.type) {
    case FETCH_BOOKS:
      //split the command into two actions

      next([
        apiRequest({
          body: null,
          method: 'GET',
          url: BOOKS_URL,
          feature: BOOKS,
        }),

        setLoader({ state: true, feature: BOOKS }),
      ]);

      break;

    case `${BOOKS} ${API_SUCCESS}`:
      next([
        setBooks({ books: action.payload.items, normalizeKey: 'id' }),

        setLoader({ state: false, feature: BOOKS }),
      ]);
      break;

    case `${BOOKS} ${API_ERROR}`:
      next([
        setNotification({ message: action.payload, feature: BOOKS }),
        setLoader({ state: false, feature: BOOKS }),
      ]);

      break;
  }
};
