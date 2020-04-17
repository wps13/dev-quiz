import reducer from '../src/config/redux/questions';
import questions from '../__mocks__/questions';

describe('Question reducer', () => {
  it('ADD_ANSWER', () => {
    const state = {
      allQuestions: questions,
      currentQuestion: 0,
      answers: [],
      actualQuestion: questions[0],
      actualQuestionId: 1,
      lastQuestion: false,
      totalQuestions: 2,
      correctAnswers: 0,
      minimumPercent: 75,
      correctPercent: 0,
      remainingQuestions: 1,
      status: '',
    };
    const action = {
      type: 'ADD_ANSWER',
      payload: {
        answerText: 'p',
      },
    };
    expect(reducer(state, action)).toEqual({
      currentQuestion: 1,
      answers: [
        {
          id: 1,
          answer: 'p',
        },
      ],
      actualQuestion: questions[1],
      actualQuestionId: 2,
      lastQuestion: true,
      totalQuestions: 2,
      correctAnswers: 0,
      minimumPercent: 75,
      correctPercent: 0,
      remainingQuestions: 0,
      status: 'failed',
      allQuestions: questions,
    });
  });
  it('RESET_DATA', () => {
    const state = {
      allQuestions: questions,
      currentQuestion: 1,
      answers: ['p', 'a'],
      actualQuestion: questions[1],
      actualQuestionId: 2,
      lastQuestion: true,
      totalQuestions: 2,
      correctAnswers: 2,
      minimumPercent: 75,
      correctPercent: 100,
      remainingQuestions: 0,
      status: 'passed',
    };
    const action = {
      type: 'RESET_DATA',
    };

    expect(reducer(state, action)).toEqual({
      currentQuestion: 0,
      answers: [],
      actualQuestion: questions[0],
      actualQuestionId: 1,
      lastQuestion: false,
      totalQuestions: 2,
      correctAnswers: 0,
      minimumPercent: 75,
      correctPercent: 0,
      remainingQuestions: 1,
      status: '',
      allQuestions: questions,
    });
  });
});
