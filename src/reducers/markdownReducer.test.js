import markdownReducer from './markdownReducer';
import { updateMarkdown } from '../actions/markdownActions';

describe('markdown reducer test', () => {
  it('returns default state', () => {
    const state = {
      text: 'Greetings'
    };

    const action = {
      type: 'Something',
      payload: 'test'
    };

    const newState = markdownReducer(state, action);

    expect(newState).toEqual(state);
  });
  it('returns updates markdown state when it gets the action', () => {
    const state = {
      text: 'Greetings'
    };

    const action = updateMarkdown('string');

    const newState = markdownReducer(state, action);

    expect(newState).toEqual({
      text: 'string'
    });
  });
});
