import { createReducer } from './_utilities';
import { GO_BACKWARD_TO, GO_TO } from '../actions/story';
import { SET_HISTORY } from '../actions/history';

const initialState = [];

function set(state, { history }) {
  return [...history];
}

function add(state, action) {
  return [...state, action];
}

function removeTo(state, { index }) {
  return state.slice(0, index);
}

export default createReducer(initialState, {
  [GO_TO]: add,
  [GO_BACKWARD_TO]: removeTo,
  [SET_HISTORY]: set,
});
