import { call, put, takeLatest } from 'redux-saga/effects';
import {
    EDIT_TASK_REQUEST,
    editTaskSuccess,
    editTaskFailure,
    fetchTasksRequest,
} from '../actions/taskActions';

function* editTask(action: any) {
  try {
    const { taskData } = action.payload;
    const formData = new FormData();
    formData.append('description', taskData.description);
    formData.append('status', taskData.status);
    if (taskData.imageFile) {
      formData.append('image', taskData.imageFile);
    }

    yield call(fetch, `http://localhost:8080/task/${taskData.id}`, {
      method: 'PUT',
      body: formData,
    });

    yield put(editTaskSuccess());
    yield put(fetchTasksRequest());
  } catch (error) {
    yield put(editTaskFailure(error.message));
  }
}

function* editTaskSaga() {
  yield takeLatest(EDIT_TASK_REQUEST, editTask);
}

export default editTaskSaga;
