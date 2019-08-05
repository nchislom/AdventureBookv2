import { combineReducers } from 'redux';

import filters from './debug/filters';
import head from './debug/head';

export default combineReducers({
  filters,
  head,
});
