import { getMarkdown } from './markdownSelector';

describe('selectors tests', () => {
  it('getMardown text from state', () => {
    const state = { markdown: { text: 'Greetings' } };
    const markdown = getMarkdown(state);

    expect(markdown).toEqual('Greetings');
  });
});
