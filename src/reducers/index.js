import { combineReducers } from 'redux';
import markdown from './markdownReducer';
import formInput from './AddMdReducer';

export default combineReducers({
  markdown,
  formInput
});
