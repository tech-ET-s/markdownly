import { UPDATE_FORM_INPUT, updateFormInput } from './addMdActions';

describe('addMdActions test', () => {
  it('returns state of input', () => {
    const action = updateFormInput('title');

    expect(action).toEqual({
      type: UPDATE_FORM_INPUT,
      payload: 'title'
    });
  });
});
