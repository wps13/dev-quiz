import React from 'react';
import {shallow} from 'enzyme';

import Instructions from './Instructions';

describe('Instructions', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Instructions />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
