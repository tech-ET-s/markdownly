import { UPDATE_FORM_INPUT, updateFormInput, addMdFile, ADD_MD_FILE } from './addMdActions';

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
});
