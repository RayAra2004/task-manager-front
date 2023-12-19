import { all } from 'redux-saga/effects';
import taskSaga from './taskSaga';
import addTaskSaga from './addTaskSaga';
import finishTaskSaga from './finishTaskSaga';

function* rootSaga() {
  yield all([
    taskSaga(),
    addTaskSaga(),
    finishTaskSaga(),
  ]);
}

export default rootSaga;