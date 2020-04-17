const calculateResult = ({
  questions,
  answers,
  totalQuestions,
  minimumPercent,
}) => {
  let corrects = 0;
  questions.forEach(question => {
    answers.forEach(answer => {
      if (question.id === answer.id && answer.answer === question.answer) {
        corrects++;
      }
    });
  });
  let percentCorrect = Math.floor((corrects / totalQuestions) * 100);
  let status = percentCorrect >= minimumPercent ? 'passed' : 'failed';
  return [corrects, percentCorrect, status];
};

export default calculateResult;
