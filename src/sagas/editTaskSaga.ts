import { call, put, takeLatest } from 'redux-saga/effects';
import {
    EDIT_TASK_REQUEST,
    editTaskSuccess,
    editTaskFailure,
    fetchTasksRequest,
} from '../actions/taskActions';

import { ActionType } from 'typesafe-actions';
import * as taskActions from '../actions/taskActions';

interface EditTaskRequestActionPayload {
  taskData: {
    id: string;
    description: string;
    status: string;
    imageFile?: File | null;
  };
}

export type EditTaskRequestAction = ActionType<typeof taskActions.editTaskRequest>;

export type TaskAction = EditTaskRequestAction;

function* editTask(action: TaskAction) {
  try {
    const { taskData } = action.payload as EditTaskRequestActionPayload;
    const formData = new FormData();
    formData.append('description', taskData.description);
    formData.append('status', taskData.status);
    if (taskData.imageFile) {
      formData.append('image', taskData.imageFile);
    }

    yield call(fetch, `${import.meta.env.VITE_API_BASE_URL}/${taskData.id}`, {
      method: 'PUT',
      body: formData,
    });

    yield put(editTaskSuccess());
    yield put(fetchTasksRequest());
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    yield put(editTaskFailure(error.message));
  }
}

function* editTaskSaga() {
  yield takeLatest(EDIT_TASK_REQUEST, editTask);
}

export default editTaskSaga;
