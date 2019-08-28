import { updateMarkdown, UPDATE_MARKDOWN } from './markdownActions';

describe('markdownAction test', () => {
  it('it can return an markdown update action', () => {
    const action = updateMarkdown('string');

    expect(action).toEqual({
      type: UPDATE_MARKDOWN,
      payload: 'string'
    });
  });
});
