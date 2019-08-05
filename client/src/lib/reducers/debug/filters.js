import { createReducer } from '../_utilities';
import {
  RESET_DEBUG_FILTERS,
  SET_DEBUG_FILTERS,
  UPDATE_DEBUG_FILTERS,
} from '../../actions/debug/filters';

import { initialDebugFiltersState as initialState } from '../../components/Debug/Filters/match';

function reset() {
  return initialState;
}

function set(state, { debugFilters }) {
  return { ...initialState, ...debugFilters };
}

function update(state, { debugFilters }) {
  return set(state, { debugFilters: { ...state, ...debugFilters } });
}

export default createReducer(initialState, {
  [RESET_DEBUG_FILTERS]: reset,
  [SET_DEBUG_FILTERS]: set,
  [UPDATE_DEBUG_FILTERS]: update,
});
