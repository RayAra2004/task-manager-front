import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_TASKS_REQUEST,
  fetchTasksSuccess,
  fetchTasksFailure,
} from '../actions/taskActions';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
function* fetchTasks(_action: unknown) {
  try {
    const response = yield call(fetch, `${import.meta.env.VITE_API_BASE_URL}/`);
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
