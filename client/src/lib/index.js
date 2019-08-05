import React from 'react';
import { toFlatArray } from 'react-children-addons';

import reducer from './reducer';

import { setContext, updateContext } from './actions/context';
import { setHistory, setCurrent } from './actions/history';
import { setSettings, updateSettings } from './actions/settings';
import { resetStory, goTo, goBackwardTo, goForward, goBackward } from './actions/story';

import Card from './components/Card';
import DebugButton from './components/Debug/Button';
import Debug from './components/Debug';
import ErrorBoundary from './components/ErrorBoundary';
import GoBackward from './components/Story/GoBackward';
import Header from './components/Header';
import Story from './components/Story';

const getSchema = children => React.Children.map(
  toFlatArray(children),
  ({ props }, index) => props.id || index,
);

export default {
  getSchema,

  reducer,

  setContext,
  updateContext,

  setHistory,
  setCurrent,

  setSettings,
  updateSettings,

  resetStory,
  goTo,
  goBackwardTo,
  goForward,
  goBackward,

  Card,
  DebugButton,
  Debug,
  ErrorBoundary,
  GoBackward,
  Header,
  Story,
};
