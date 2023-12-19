import { all } from 'redux-saga/effects';
import taskSaga from './taskSaga';
import addTaskSaga from './addTaskSaga';
import finishTaskSaga from './finishTaskSaga';
import editTaskSaga from './editTaskSaga';

function* rootSaga() {
  yield all([
    taskSaga(),
    addTaskSaga(),
    finishTaskSaga(),
    editTaskSaga(),
  ]);
}

export default rootSaga;