import { dataNormalized } from '../../actions/data';
import { setBooks } from '../../actions/books';

export const normalizeMiddleware = ({ dispatch }) => next => action => {
  // next(action);
  // !!!
  // Note that for this middleware, we are not calling next on the first line. The reason for this is that
  // this middleware accepts and dispatches the same action.
  //inkabb atengedi, mivel lenn van az else agban a next action...

  // filter both by action type and metadata content
  // content-aware filtering:

  if (action.type.includes('SET') && action.meta.normalizeKey) {
    // notify about the transformation
    dispatch(dataNormalized({ feature: action.meta.feature }));

    // transform the data structure
    const books = action.payload.reduce((acc, item) => {
      acc[item[action.meta.normalizeKey]] = item;
      return acc;
    }, {});

    // fire the books document action
    next(setBooks({ books, normalizeKey: null }));
  } else {
    next(action);
  }
};
