import { call, put, takeLatest } from 'redux-saga/effects';
import {
    CREATE_TASK_REQUEST,
    createTaskSuccess,
    createTaskFailure,
    fetchTasksRequest,
} from '../actions/taskActions';
import { ActionType } from 'typesafe-actions';
import * as taskActions from '../actions/taskActions';

interface CreateTaskRequestActionPayload {
  taskData: {
    description: string;
    status: string;
    imageFile?: File | null;
  };
}

export type CreateTaskRequestAction = ActionType<typeof taskActions.createTaskRequest>;

export type TaskAction = CreateTaskRequestAction;

function* addTask(action: TaskAction) {
  try {
    const { taskData } = action.payload as CreateTaskRequestActionPayload;
    const formData = new FormData();
    formData.append('description', taskData.description);
    formData.append('status', taskData.status);
    if (taskData.imageFile) {
      formData.append('image', taskData.imageFile);
    }

    yield call(fetch, `${import.meta.env.VITE_API_BASE_URL}/`, {
      method: 'POST',
      body: formData,
    });

    yield put(createTaskSuccess());
    yield put(fetchTasksRequest());
  } catch (error: unknown) {
    yield put(createTaskFailure(error.message));
  }
}

function* addTaskSaga() {
  yield takeLatest(CREATE_TASK_REQUEST, addTask);
}

export default addTaskSaga;
