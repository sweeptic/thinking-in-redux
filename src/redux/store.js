import { DevTools } from '../ui/DevTool';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { booksReducer } from './reducers/books';
import { booksMiddleware } from './middleware/books';
import { apiMiddleware } from './middleware/api';
import { uiReducer } from './reducers/ui';
import { notificationsReducer } from './reducers/notification';
import { normalizeMiddleware } from './middleware/normalize';
import { notificationMiddleware } from './middleware/notification';
import { loggerMiddleware } from './middleware/logger';

// shape the state structure
const rootReducer = combineReducers({
  books: booksReducer,
  ui: uiReducer,
  notification: notificationsReducer,
});

// create the feature middleware array
const featureMiddleware = [booksMiddleware];

// create the core middleware array
const coreMiddleware = [
  apiMiddleware,
  normalizeMiddleware,
  notificationMiddleware,
  loggerMiddleware,
];

// compose the middleware with additional (optional) enhancers,
// DevTools.instrument() will enable dev tools integration
const enhancer = compose(
  applyMiddleware(...featureMiddleware, ...coreMiddleware),
  DevTools.instrument()
);

// create and configure the store
export const store = createStore(rootReducer, {}, enhancer);
