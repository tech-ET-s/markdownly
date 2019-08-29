import { UPDATE_MARKDOWN } from '../actions/markdownActions';

const initialState = {
  text: ''
};

export default function reducer(state = initialState, action){
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return { ...state, text: action.payload };
    default:
      return state;
  }
}

