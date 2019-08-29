import { UPDATE_FORM_INPUT, ADD_MD_FILE, CLEAR_FORM_INPUT } from '../actions/addMdActions';

const initialState = {
  formInput: '',
  mdArray: [{ title: 'Title', body: 'Hello' }]
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_FORM_INPUT:
      return { ...state, formInput: action.payload };
    case ADD_MD_FILE:
      return { ...state, formInput: '', mdArray: [...state.mdArray, action.payload] };
    case CLEAR_FORM_INPUT:
      return { ...state, formInput: action.payload };
    default:
      return state;
  }
}
