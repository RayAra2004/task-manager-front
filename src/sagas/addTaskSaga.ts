import { call, put, takeLatest } from 'redux-saga/effects';
import {
    CREATE_TASK_REQUEST,
    createTaskSuccess,
    createTaskFailure,
    fetchTasksRequest,
} from '../actions/taskActions';

function* addTask(action: any) {
  try {
    const { taskData } = action.payload;
    const formData = new FormData();
    formData.append('description', taskData.description);
    formData.append('status', taskData.status);
    if (taskData.imageFile) {
      formData.append('image', taskData.imageFile);
    }

    yield call(fetch, 'http://localhost:8080/task/', {
      method: 'POST',
      body: formData,
    });

    yield put(createTaskSuccess());
    yield put(fetchTasksRequest());
  } catch (error) {
    yield put(createTaskFailure(error.message));
  }
}

function* addTaskSaga() {
  yield takeLatest(CREATE_TASK_REQUEST, addTask);
}

export default addTaskSaga;
