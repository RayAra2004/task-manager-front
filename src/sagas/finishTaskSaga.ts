import { call, put, takeLatest } from 'redux-saga/effects';
import {
    FINISH_TASK_REQUEST,
    finishTaskSuccess,
    finishTaskFailure,
    fetchTasksRequest,
} from '../actions/taskActions';
import { ActionType } from 'typesafe-actions';
import * as taskActions from '../actions/taskActions';

interface FinishTaskRequestActionPayload {
  taskData: {
    id: string;
  };
}

export type FinishTaskRequestAction = ActionType<typeof taskActions.finishTaskRequest>;

export type TaskAction = FinishTaskRequestAction;

function* finishTask(action: TaskAction) {
  try {
    const { taskData } = action.payload as FinishTaskRequestActionPayload;
    

    yield call(fetch, `${import.meta.env.VITE_API_BASE_URL}/finish/${taskData.id}`, {
      method: 'POST',
    });

    yield put(finishTaskSuccess());
    yield put(fetchTasksRequest());
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    yield put(finishTaskFailure(error.message));
  }
}

function* finishTaskSaga() {
  yield takeLatest(FINISH_TASK_REQUEST, finishTask);
}

export default finishTaskSaga;