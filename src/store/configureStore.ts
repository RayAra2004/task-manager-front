import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import taskReducer from '../reducers/taskReducer';
import rootSaga from '../sagas/rootSaga';

const rootReducer = combineReducers({
  task: taskReducer,
});

const sagaMiddleware = createSagaMiddleware();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;