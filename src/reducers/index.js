import { combineReducers } from 'redux';
import markdown from './markdownReducer';
import inputAndList from './AddMdReducer';

export default combineReducers({
  markdown,
  inputAndList
});
