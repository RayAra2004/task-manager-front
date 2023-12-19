import { all } from 'redux-saga/effects';
import taskSaga from './taskSaga';
import addTaskSaga from './addTaskSaga';

function* rootSaga() {
  yield all([
    taskSaga(),
    addTaskSaga(),
  ]);
}

export default rootSaga;