import {createStore, combineReducers} from 'redux';
import questionReducer from './questions';

const rootReducer = combineReducers({question: questionReducer});

const store = createStore(rootReducer);

export default store;
