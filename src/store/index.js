import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { sortingReducer } from './sortingReducer.js';
import { filterReducer } from './filterReducer.js';

const rootReducer = combineReducers({
  sortingReducer,
  filterReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
