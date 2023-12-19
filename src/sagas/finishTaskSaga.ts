import { call, put, takeLatest } from 'redux-saga/effects';
import {
    FINISH_TASK_REQUEST,
    finishTaskSuccess,
    finishTaskFailure,
    fetchTasksRequest,
} from '../actions/taskActions';

function* finishTask(action: any) {
  try {
    const { taskData } = action.payload;
    

    yield call(fetch, `http://localhost:8080/task/finish/${taskData.id}`, {
      method: 'POST',
    });

    yield put(finishTaskSuccess());
    yield put(fetchTasksRequest());
  } catch (error) {
    yield put(finishTaskFailure(error.message));
  }
}

function* finishTaskSaga() {
  yield takeLatest(FINISH_TASK_REQUEST, finishTask);
}

export default finishTaskSaga;