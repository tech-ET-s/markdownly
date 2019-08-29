import { getFormInput, getMdFiles, getBody } from './addMdSelector';

describe('addMdSelector test', () => {
  it('gets form input state', () => {
    const state = {
      inputAndList: {
        formInput: 'Hello'
      }
    };

    const title = getFormInput(state);

    expect(title).toEqual('Hello');
  });

  it('gets file array state', () => {
    const state = {
      inputAndList: {
        mdArray: [{
          title: 'hello',
          body: 'hot body'
        }, {
          title: 'bye',
          body: 'bad body'
        }]
      }
    };

    const array = getMdFiles(state);

    expect(array).toEqual([{
      title: 'hello',
      body: 'hot body'
    }, {
      title: 'bye',
      body: 'bad body'
    }]);
  });

  it('gets body by index', () => {
    const state = {
      inputAndList: {
        mdArray: [{
          title: 'hello',
          body: 'hot body'
        }, {
          title: 'bye',
          body: 'bad body'
        }]
      }
    };

    const array = getBody(state, 1);

    expect(array).toEqual('bad body');
  });
});
