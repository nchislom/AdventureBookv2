import { createReducer } from './_utilities';
import { SET_CONTEXT, UPDATE_CONTEXT } from '../actions/context';

const initialState = null;

function set(state, { context }) {
  return context;
}

function update(state, { context }) {
  return { ...state, ...context };
}

export default createReducer(initialState, {
  [SET_CONTEXT]: set,
  [UPDATE_CONTEXT]: update,
});
