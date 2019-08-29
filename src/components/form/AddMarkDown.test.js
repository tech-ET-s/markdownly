import React from 'react';
import { shallow } from 'enzyme';
import AddMarkdown from './AddMarkdown';

describe('AddMarkdown component', () => {
  it('form to save a markdown obj', () => {
    const wrapper = shallow(<AddMarkdown
      formInputSubmit={()=>{}}
      formInputChange={()=>{}}
      formInput='Hellow'/>);
    expect(wrapper).toMatchSnapshot();
  });
});
