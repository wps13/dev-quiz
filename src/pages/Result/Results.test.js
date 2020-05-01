import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

import Results from './Result';

import questions from '../../../__mocks__/questions';

const mockStore = configureMockStore([]);

const defaultValue = {
  allQuestions: questions,
  currentQuestion: 1,
  answers: ['img'],
  actualQuestion: questions[1],
  actualQuestionId: 2,
  lastQuestion: true,
  totalQuestions: questions.length,
  correctAnswers: 1,
  minimumPercent: 75,
  correctPercent: 50,
  remainingQuestions: 0,
  status: 'failed',
};

const store = mockStore({question: defaultValue});

store.dispatch = jest.fn();

const props = {
  navigation: {
    navigate: jest.fn(),
  },
};

describe('Results', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Results {...props} />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render the texts correctly', () => {
    jest.mock('react-redux', () => ({
      useSelector: selectorFn =>
        selectorFn({
          question: {
            allQuestions: [
              {
                id: 1,
                title: 'Which tag is used to insert an image in html?',
                alternatives: ['p', 'img', 'div', 'media'],
                answer: 'img',
              },
              {
                id: 2,
                title: 'How does position absolute works on css?',
                alternatives: [
                  'It moves the element out of the document flow',
                  'it moves the elements to another parent',
                  'it hides the elements',
                  'it puts the element above all the other elements',
                ],
                answer: 'It moves the element out of the document flow',
              },
            ],
            currentQuestion: 1,
            answers: ['img'],
            actualQuestion: {
              id: 2,
              title: 'How does position absolute works on css?',
              alternatives: [
                'It moves the element out of the document flow',
                'it moves the elements to another parent',
                'it hides the elements',
                'it puts the element above all the other elements',
              ],
              answer: 'It moves the element out of the document flow',
            },
            actualQuestionId: 2,
            lastQuestion: true,
            totalQuestions: 2,
            correctAnswers: 1,
            minimumPercent: 75,
            correctPercent: 50,
            remainingQuestions: 0,
            status: 'failed',
          },
        }),
      useDispatch: jest.fn(),
    }));
    const wrapper = mount(
      <Provider store={store}>
        <Results {...props} />
      </Provider>,
    );
    const title = wrapper.findWhere(
      node => node.prop('testID') === 'Results-title',
    );

    const description = wrapper.findWhere(
      node => node.prop('testID') === 'Results-description',
    );
    const correctPercent = wrapper.findWhere(
      node => node.prop('testID') === 'Results-correctPercent',
    );

    const minimumPercent = wrapper.findWhere(
      node => node.prop('testID') === 'Results-minimumPercent',
    );

    expect(title.exists()).toEqual(true);
    expect(title.first().text()).toEqual('You failed!');

    expect(description.exists()).toEqual(true);
    expect(description.first().text()).toEqual(
      'You answered 1 out of 2 correctly',
    );

    expect(correctPercent.exists()).toEqual(true);
    expect(correctPercent.first().text()).toEqual('You got 50% correct');

    expect(minimumPercent.exists()).toEqual(true);
    expect(minimumPercent.first().text()).toEqual(
      'Minimum required to pass: 75%',
    );
  });
  it('should call go to start correctly', () => {
    jest.mock('react-redux', () => ({
      useSelector: selectorFn =>
        selectorFn({
          question: {
            allQuestions: [
              {
                id: 1,
                title: 'Which tag is used to insert an image in html?',
                alternatives: ['p', 'img', 'div', 'media'],
                answer: 'img',
              },
              {
                id: 2,
                title: 'How does position absolute works on css?',
                alternatives: [
                  'It moves the element out of the document flow',
                  'it moves the elements to another parent',
                  'it hides the elements',
                  'it puts the element above all the other elements',
                ],
                answer: 'It moves the element out of the document flow',
              },
            ],
            currentQuestion: 1,
            answers: ['img'],
            actualQuestion: {
              id: 2,
              title: 'How does position absolute works on css?',
              alternatives: [
                'It moves the element out of the document flow',
                'it moves the elements to another parent',
                'it hides the elements',
                'it puts the element above all the other elements',
              ],
              answer: 'It moves the element out of the document flow',
            },
            actualQuestionId: 2,
            lastQuestion: true,
            totalQuestions: 2,
            correctAnswers: 1,
            minimumPercent: 75,
            correctPercent: 50,
            remainingQuestions: 0,
            status: 'failed',
          },
        }),
      useDispatch: jest.fn(),
    }));
    const wrapper = mount(
      <Provider store={store}>
        <Results {...props} />
      </Provider>,
    );
    const button = wrapper.findWhere(
      node => node.prop('testID') === 'Results-buttonHome',
    );

    button.props().pressFunction();

    expect(button.exists()).toEqual(true);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
