import { UPDATE_FORM_INPUT, ADD_MD_FILE } from '../actions/addMdActions';

const initialState = {
  formInput: '',
  mdArray: [{ title: 'Title', body: 'Hello' }]
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_FORM_INPUT:
      return { ...state, formInput: action.payload };
    case ADD_MD_FILE:
      return { ...state, mdArray: [...state.mdArray, action.payload] };
    default:
      return state;
  }
}
