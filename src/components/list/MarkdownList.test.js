import React from 'react';
import { shallow } from 'enzyme';
import MarkdownList from './MarkdownList';

describe('MardownList component', () => {
  it('render mardown list', () => {
    const array = [{ title: 'calling' }, { title: 'bluf' }];
    const wrapper = shallow(<MarkdownList 
      markdowns={array}
      clickHandler={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
