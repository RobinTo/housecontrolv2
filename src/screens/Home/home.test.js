/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Home from './';

describe('screens/home', () => {
  it('text contains home page', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.text())
      .to
      .contain('home page');
  });
});
