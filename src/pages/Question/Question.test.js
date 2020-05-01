import React from 'react';
import {shallow, mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import Question from './Question';

import questions from '../../../__mocks__/questions';

const defaultValue = {
  allQuestions: questions,
  currentQuestion: 0,
  answers: [],
  actualQuestion: questions[0],
  actualQuestionId: 1,
  lastQuestion: false,
  totalQuestions: questions.length,
  correctAnswers: 0,
  minimumPercent: 75,
  correctPercent: 0,
  remainingQuestions: 1,
  status: '',
};

const mockStore = configureMockStore([]);

const props = {
  navigation: {
    navigate: jest.fn(),
  },
};

let store;

const renderQuestion = () =>
  shallow(
    <Provider store={store}>
      <Question {...props} />
    </Provider>,
  );

describe('Question', () => {
  beforeEach(() => {
    store = mockStore({question: defaultValue});
    store.dispatch = jest.fn();
  });
  it('should render correctly', () => {
    const wrapper = renderQuestion();

    expect(wrapper).toMatchSnapshot();
  });
  it('should render correctly the remaining questions', () => {
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
            currentQuestion: 0,
            answers: [],
            actualQuestion: {
              id: 1,
              title: 'Which tag is used to insert an image in html?',
              alternatives: ['p', 'img', 'div', 'media'],
              answer: 'img',
            },
            actualQuestionId: 1,
            lastQuestion: false,
            totalQuestions: 2,
            correctAnswers: 0,
            minimumPercent: 75,
            correctPercent: 0,
            remainingQuestions: 1,
            status: '',
          },
        }),
      useDispatch: jest.fn(),
    }));

    const wrapper = mount(
      <Provider store={store}>
        <Question {...props} />
      </Provider>,
    );

    const remainingText = wrapper.findWhere(
      node => node.prop('testID') === 'Question-RemainingValue',
    );

    expect(remainingText.exists()).toEqual(true);
    expect(remainingText.first().text()).toEqual('Remaining questions: 1');
  });
});
