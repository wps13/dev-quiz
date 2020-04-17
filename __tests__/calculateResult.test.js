import {calculateResult} from '../src/utils';
import questions from '../__mocks__/questions';

const MINIMUM_PERCENT = 75;

describe('calculateResult', () => {
  it('should return 0 corrects case answer is incorrect', () => {
    const answers = [{id: 1, answer: 'p'}];
    const [corrects, percentCorrect, status] = calculateResult({
      questions,
      answers,
      MINIMUM_PERCENT,
      totalQuestions: 2,
    });
    expect(status).toEqual('failed');
    expect(corrects).toEqual(0);
    expect(percentCorrect).toEqual(0.0);
  });
  it('should return 1 correct case answer is incorrect', () => {
    const answers = [
      {id: 1, answer: 'p'},
      {id: 2, answer: 'It moves the element out of the document flow'},
    ];

    const [corrects, percentCorrect, status] = calculateResult({
      questions,
      answers,
      MINIMUM_PERCENT,
      totalQuestions: 2,
    });
    expect(status).toEqual('failed');
    expect(corrects).toEqual(1);
    expect(percentCorrect).toEqual(50.0);
  });
});
