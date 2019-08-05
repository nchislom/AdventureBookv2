import { combineReducers } from 'redux';
import RDS from './lib';

const { reducer: dynamicStory } = RDS;

export default combineReducers({
  dynamicStory,
});
