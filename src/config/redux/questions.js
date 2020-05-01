import questions from '../../utils/questions';
import calculateResult from '../../utils/calculateResult';

const ADD_ANSWER = 'ADD_ANSWER';
const RESET_DATA = 'RESET_DATA';

export const changeQuestion = answerText => ({
  type: ADD_ANSWER,
  payload: {
    answerText,
  },
});

export const reset = () => ({type: RESET_DATA});

const INITIAL_STATE = {
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
  remainingQuestions: questions.length - 1,
  status: '',
};

const questionReducer = (action, state = INITIAL_STATE) => {
  switch (action.type) {
    case ADD_ANSWER:
      let newAnswers = state.answers.concat({
        id: state.actualQuestionId,
        answer: action.payload.answerText,
      });
      let currentQuestion = state.currentQuestion;
      let totalQ = state.totalQuestions;
      let minimumPerc = state.minimumPercent;
      const ques = state.allQuestions;
      let [corrects, percentCorrect, currentStatus] = calculateResult({
        questions: ques,
        answers: newAnswers,
        totalQuestions: totalQ,
        minimumPercent: minimumPerc,
      });
      let remainingQ = state.remainingQuestions;
      let actualQID = state.actualQuestionId;

      return {
        ...state,
        currentQuestion: currentQuestion + 1,
        answers: newAnswers,
        actualQuestionId: actualQID + 1,
        actualQuestion: questions[currentQuestion + 1],
        correctAnswers: corrects,
        correctPercent: percentCorrect,
        remainingQuestions: remainingQ - 1,
        status: currentStatus,
        lastQuestion: actualQID + 1 >= totalQ,
      };
    case RESET_DATA:
      return {
        ...state,
        answers: [],
        actualQuestion: state.allQuestions[0],
        actualQuestionId: 1,
        lastQuestion: false,
        currentQuestion: 0,
        correctAnswers: 0,
        correctPercent: 0,
        status: '',
        remainingQuestions: state.allQuestions.length - 1,
      };
    default:
      return state;
  }
};

export default questionReducer;
