import addMdReducer from './AddMdReducer';
import { updateFormInput, addMdFile } from '../actions/addMdActions';

describe('addMdReducer tests', () => {
  it('returns default state', () => {
    const state = {
      formInput: 'Hello'
    };

    const action = {
      type: 'Nothing',
      payload: 'hmmm'
    };

    const newState = addMdReducer(state, action);
    expect(newState).toEqual(state);
  });

  it('updates state', () => {
    const state = {
      formInput: 'Hello'
    };

    const action = updateFormInput('Hell');

    const newState = addMdReducer(state, action);
    expect(newState).toEqual({ formInput: 'Hell' });
  });

  it('adding an MD file object to array in state', () => {
    const state = {
      mdArray: [{ title: 'Title', body: 'Hello' }]
    };

    const action = addMdFile('Hello');

    const newState = addMdReducer(state, action);
    expect(newState).toEqual({ mdArray: [{ title: 'Title', body: 'Hello' }, { title: 'Hello', body: '' }] });
  });
});
