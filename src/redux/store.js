import { compose, createStore } from 'redux';
import { DevTools } from '../ui/DevTool';

const enhancer = compose(DevTools.instrument());

export const store = createStore(
  state => state,
  { message: 'thinking in redux' },
  enhancer
);
