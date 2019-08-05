import { combineReducers } from 'redux';

import { RESET_STORY } from './actions/story';

import context from './reducers/context';
import current from './reducers/current';
import debug from './reducers/debug';
import history from './reducers/history';
import settings from './reducers/settings';

const dynamicStory = combineReducers({
  context,
  current,
  debug,
  history,
  settings,
});

const reducer = (state, action) => {
  let newState = state;

  const { storage, storageItem, type } = action;
  if (type === RESET_STORY) {
    if (storage && storage.removeItem) {
      storage.removeItem(storageItem || 'persist:dynamicStory');
    }
    newState = undefined;
  }
  return dynamicStory(newState, action);
};

export default reducer;
