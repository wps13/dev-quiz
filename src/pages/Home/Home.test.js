import React from 'react';
import {shallow} from 'enzyme';

import Home from './Home';

const props = {
  navigation: {
    navigate: jest.fn(route => route),
  },
};

const renderHome = () => shallow(<Home {...props} />);

const questionsNode = wrapper =>
  wrapper.findWhere(node => node.prop('testID') === 'Home-ButtonQuestion');

const instructionsNode = wrapper =>
  wrapper.findWhere(node => node.prop('testID') === 'Home-ButtonInstructions');

describe('Home', () => {
  it('should render correctly', () => {
    const wrapper = renderHome();
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('should render button to start the quiz', () => {
    const wrapper = renderHome();
    const questionsButton = questionsNode(wrapper);

    expect(questionsButton.exists()).toEqual(true);
    wrapper.unmount();
  });
  it('should render button to instructions', () => {
    const wrapper = renderHome();
    const instructionsButton = instructionsNode(wrapper);

    expect(instructionsButton.exists()).toEqual(true);
  });
  it('should navigate to questions on press Instructions button', () => {
    //montar componente
    const wrapper = renderHome();
    // simular press
    const questionsButton = questionsNode(wrapper);
    const route = questionsButton
      .first()
      .props()
      .pressFunction();
    // checar navigation
    expect(route).toEqual('Question');
    wrapper.unmount();
  });
  it('should navigate to  instructions  on press Start button', () => {
    //montar componente
    const wrapper = renderHome();
    // simular press
    const instructionsButton = instructionsNode(wrapper);
    const route = instructionsButton
      .first()
      .props()
      .pressFunction();
    // checar navigation
    expect(route).toEqual('Instructions');
    wrapper.unmount();
  });
});
