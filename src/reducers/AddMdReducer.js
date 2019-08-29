import { UPDATE_FORM_INPUT } from '../actions/addMdActions';

export default function reducer(state = '', action) {
  switch(action.type) {
    case UPDATE_FORM_INPUT:
      return action.payload;
    default:
      return state;
  }
}
