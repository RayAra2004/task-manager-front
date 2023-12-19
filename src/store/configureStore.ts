import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import taskReducer from '../reducers/taskReducer';
import rootSaga from '../sagas/rootSaga';

const rootReducer = combineReducers({
  task: taskReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;