export const UPDATE_FORM_INPUT = 'UPDATE_FORM_INPUT';
export const updateFormInput = title => ({
  type: UPDATE_FORM_INPUT,
  payload: title
});

export const ADD_MD_FILE = 'ADD_MD_FILE';
export const addMdFile = (title) => ({
  type: ADD_MD_FILE,
  payload: { title, body: '' }
});

export const CLEAR_FORM_INPUT = 'CLEAR_FORM_INPUT';
export const clearFormInput = () => ({
  type: CLEAR_FORM_INPUT,
  payload: ''
});
