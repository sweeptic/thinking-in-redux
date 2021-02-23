import { API_REQUEST, apiError, apiSuccess } from '../../actions/api';

// The API middleware is generic and reusable.
// 2. The API middleware has only one responsibility.
// 3. The API middleware is configured by command action metadata.
// 4. The API middleware is completely decoupled from the rest of our application.

export const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type.includes(API_REQUEST)) {
    const { body, url, method, feature } = action.meta;
    // feature - integrity key

    //mapping an action to a different
    // action while maintaining integrity using the feature name.
    fetch(url, { body, method })
      .then(response => response.json())
      .then(response => dispatch(apiSuccess({ response, feature })))
      .catch(error => dispatch(apiError({ error, feature })));
  }
};
