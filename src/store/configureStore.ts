import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import taskReducer from '../reducers/taskReducer';
import taskSaga from '../sagas/taskSaga';

const rootReducer = combineReducers({
  task: taskReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(taskSaga);

export default store;