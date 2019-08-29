import addMdReducer from './AddMdReducer';
import { updateFormInput } from '../actions/addMdActions';

describe('addMdReducer tests', () => {
  it('returns default state', () => {
    const state = 'Hello';

    const action = {
      type: 'Nothing',
      payload: 'hmmm'
    };

    const newState = addMdReducer(state, action);
    expect(newState).toEqual(state);
  });

  it('updates state', () => {
    const state = 'Hello';

    const action = updateFormInput('Hell');

    const newState = addMdReducer(state, action);
    expect(newState).toEqual('Hell');
  });
});
