import { createReducer } from './_utilities';
import { SET_SETTINGS, UPDATE_SETTINGS } from '../actions/settings';

const initialState = {
  darkMode: false,
  debug: false,
};

function set(state, { settings }) {
  return settings;
}

function update(state, { settings }) {
  return { ...state, ...settings };
}

export default createReducer(initialState, {
  [SET_SETTINGS]: set,
  [UPDATE_SETTINGS]: update,
});
