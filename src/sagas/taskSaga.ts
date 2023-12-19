// taskSaga.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_TASKS_REQUEST,
  fetchTasksSuccess,
  fetchTasksFailure,
} from '../actions/taskActions';

function* fetchTasks(action: any) {
  try {
    const response = yield call(fetch, `http://localhost:8080/task/`);
    const data = yield response.json();
    yield put(fetchTasksSuccess(data));
  } catch (error) {
    yield put(fetchTasksFailure(error.message));
  }
}

function* taskSaga() {
  yield takeLatest(FETCH_TASKS_REQUEST, fetchTasks);
}

export default taskSaga;
