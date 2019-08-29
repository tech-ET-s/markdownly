export const UPDATE_FORM_INPUT = 'UPDATE_FORM_INPUT';
export const updateFormInput = title => ({
  type: UPDATE_FORM_INPUT,
  payload: title
});

export const ADD_MD_FILE = 'ADD_MD_FILE';
export const addMdFile = (title) => ({
  type: ADD_MD_FILE,
  payload: { title, body: '', isActive: false }
});

export const CLEAR_FORM_INPUT = 'CLEAR_FORM_INPUT';
export const clearFormInput = () => ({
  type: CLEAR_FORM_INPUT,
  payload: ''
});

export const UPDATE_MD_BODY = 'UPDATE_MD_BODY';
export const updateMdBody = (body, index) => ({
  type: UPDATE_MD_BODY,
  payload: { body, index }
});

export const UPDATE_ACTIVE_STATUS = 'UPDATE_ACTIVE_STATUS';
export const updateActiveStatus = (index) => ({
  type: UPDATE_ACTIVE_STATUS,
  payload: index 
});
