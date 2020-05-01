import React from 'react';
import {shallow} from 'enzyme';
import {Text} from 'react-native';

import Button from './Button';

const props = {
  text: 'Start',
  pressFunction: jest.fn(),
  buttonColor: '#333',
  textColor: '#FFF',
};

const renderButton = () => shallow(<Button {...props} />);

describe('Button', () => {
  it('should render correctly', () => {
    const wrapper = renderButton();
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('should render the text correctly', () => {
    const wrapper = renderButton();

    const textComponent = wrapper.find('Text');

    expect(textComponent.exists()).toBe(true);
    expect(textComponent.dive().text()).toEqual(props.text);
    wrapper.unmount();
  });
  it('should call the press function correctly', () => {
    const wrapper = renderButton();
    wrapper.props().onPress();
    expect(props.pressFunction.mock.calls.length).toBe(1);
    wrapper.unmount();
  });
});
