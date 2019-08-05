import { createReducer } from './_utilities';
import { GO_BACKWARD_TO, GO_TO } from '../actions/story';
import { SET_CURRENT } from '../actions/history';

const initialState = 0;

function set(state, { current, to }) {
  return current !== undefined ? current : to;
}

export default createReducer(initialState, {
  [GO_BACKWARD_TO]: set,
  [GO_TO]: set,
  [SET_CURRENT]: set,
});
