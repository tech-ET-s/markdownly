import { getFormInput } from './addMdSelector';

describe('addMdSelector test', () => {
  it('gets form input state', () => {
    const state = {
      formInput: 'Hello'
    };

    const title = getFormInput(state);

    expect(title).toEqual('Hello');
  });
});
