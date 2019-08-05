import { setContext } from './context';

export const RESET_STORY = 'RDS_RESET_STORY';
export const resetStory = (storage, storageItem) => ({ type: RESET_STORY, storage, storageItem });

export const GO_TO = 'RDS_GO_TO';
export const goTo = (from, to, context) => (dispatch, getState) => {
  dispatch({ type: GO_TO, from, to, context: context || getState().dynamicStory.context });
};

export const GO_BACKWARD_TO = 'RDS_GO_BACKWARD_TO';
export const goBackwardTo = (i, context, to) => (dispatch, getState) => {
  if (i === undefined || i > -1) {
    const { history } = getState().dynamicStory;

    const index = i !== undefined ? i : history.find(action => action.from === to);
    const actionToGo = history[index];

    if (actionToGo) {
      dispatch({ type: GO_BACKWARD_TO, index, current: actionToGo.from });
      dispatch(setContext(context || actionToGo.context));
    }
  }
};

export const goForward = (skip = 0, context) => (dispatch, getState) => {
  const { dynamicStory } = getState();
  const from = dynamicStory.current;

  dispatch(goTo(from, from + skip + 1, context || dynamicStory.context));
};

export const goBackward = (skip = 0) => (dispatch, getState) => {
  dispatch(goBackwardTo(getState().dynamicStory.history.length - skip - 1));
};
