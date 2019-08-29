import {
  UPDATE_FORM_INPUT,
  updateFormInput,
  addMdFile,
  ADD_MD_FILE,
  clearFormInput,
  CLEAR_FORM_INPUT,
  updateMdBody,
  UPDATE_MD_BODY
} from './markdownActions';

describe('addMdActions test', () => {
  it('returns state of input', () => {
    const action = updateFormInput('title');

    expect(action).toEqual({
      type: UPDATE_FORM_INPUT,
      payload: 'title'
    });
  });

  it('returns new object for md file', () => {
    const action = addMdFile('title');

    expect(action).toEqual({
      type: ADD_MD_FILE,
      payload: { title: 'title', body: '' }
    });
  });

  it('returns empty string', () => {
    const action = clearFormInput();

    expect(action).toEqual({
      type: CLEAR_FORM_INPUT,
      payload: ''
    });
  });

  it('returns an action with a body', () => {
    const action = updateMdBody('body', 1);

    expect(action).toEqual({
      type: UPDATE_MD_BODY,
      payload: {
        body: 'body',
        index: 1
      }
    });
  });
});
