import markdownReducers from './markdownReducers';
import { updateFormInput, addMdFile, updateMdBody, updateActiveStatus } from '../actions/markdownActions';

describe('markdownReducers tests', () => {
  it('returns default state', () => {
    const state = {
      formInput: 'Hello'
    };

    const action = {
      type: 'Nothing',
      payload: 'hmmm'
    };

    const newState = markdownReducers(state, action);
    expect(newState).toEqual(state);
  });

  it('updates state', () => {
    const state = {
      formInput: 'Hello'
    };

    const action = updateFormInput('Hell');

    const newState = markdownReducers(state, action);
    expect(newState).toEqual({ formInput: 'Hell' });
  });

  it('adding an MD file object to array in state', () => {
    const state = {
      mdArray: [{ title: 'Title', body: 'Hello', isActive: true }]
    };

    const action = addMdFile('Hello');

    const newState = markdownReducers(state, action);
    expect(newState).toEqual({ mdArray: [{ title: 'Title', body: 'Hello', isActive: true }, { title: 'Hello', body: '', isActive: false }] });
  });

  it('updates body within mdArray obj by index', () => {
    const state = {
      mdArray: [{ title: 'Title', body: 'Hello' }, { title: 'bye', body: 'bad body' }]
    };

    const action = updateMdBody('good body', 1);

    const newState = markdownReducers(state, action);
    expect(newState).toEqual({ mdArray: [{ title: 'Title', body: 'Hello' }, { title: 'bye', body: 'good body' }] });
  });

  it('can toggle isActive by index', () => {
    const state = {
      mdArray: [{ title: 'Title', body: 'Hello', isActive: true }, { title: 'bye', body: 'bad body', isActive: false }]
    };

    const action = updateActiveStatus(1);

    const newState = markdownReducers(state, action);
    expect(newState).toEqual({ mdArray: [{ title: 'Title', body: 'Hello', isActive: false }, { title: 'bye', body: 'bad body', isActive: true }] });
  });
});
