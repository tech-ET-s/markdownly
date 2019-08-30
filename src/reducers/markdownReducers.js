import { 
  UPDATE_FORM_INPUT,
  ADD_MD_FILE,
  CLEAR_FORM_INPUT,
  UPDATE_MD_BODY,
  UPDATE_ACTIVE_STATUS
} from '../actions/markdownActions';

const initialState = {
  formInput: '',
  mdArray: [{ title: 'Title', body: '# Hello', isActive: true }]
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_FORM_INPUT:
      return { ...state, formInput: action.payload };
    case ADD_MD_FILE:
      return { ...state, mdArray: [...state.mdArray, action.payload] };
    case CLEAR_FORM_INPUT:
      return { ...state, formInput: action.payload };
    case UPDATE_MD_BODY:
      return { ...state, mdArray: state.mdArray.map((md, i) => {
        return md.isActive ?
          { ...state.mdArray[i], body: action.payload.body } :
          md;
      }) };
    case UPDATE_ACTIVE_STATUS:
      return { ...state, mdArray: state.mdArray.map((_, i) => {
        return i === action.payload ?
          { ...state.mdArray[i], isActive: true } :
          { ...state.mdArray[i], isActive: false };
      }) };
    default:
      return state;
  }
}
