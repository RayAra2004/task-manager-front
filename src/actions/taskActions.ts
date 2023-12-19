import { Task } from "../reducers/taskReducer";

export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';

export const CREATE_TASK_REQUEST = 'CREATE_TASK_REQUEST';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
export const CREATE_TASK_FAILURE = 'CREATE_TASK_FAILURE';

export const FINISH_TASK_REQUEST = 'FINISH_TASK_REQUEST';
export const FINISH_TASK_SUCCESS = 'FINISH_TASK_SUCCESS';
export const FINISH_TASK_FAILURE = 'FINISH_TASK_FAILURE';

export const fetchTasksRequest = () => ({
  type: FETCH_TASKS_REQUEST,
});

export const fetchTasksSuccess = (tasks: Task[]) => ({
  type: FETCH_TASKS_SUCCESS,
  payload: { tasks },
});

export const fetchTasksFailure = (error: string) => ({
  type: FETCH_TASKS_FAILURE,
  payload: { error },
});

type TaskData = {
  description: string;
  imageFile: File | null;
  status: string;
}

export const createTaskRequest = (taskData: TaskData) => ({
  type: CREATE_TASK_REQUEST,
  payload: { taskData },
});

export const createTaskSuccess = () => ({
  type: CREATE_TASK_SUCCESS,
});

export const createTaskFailure = (error: string) => ({
  type: CREATE_TASK_FAILURE,
  payload: { error },
});

type TaskFinish ={
  id: string;
}

export const finishTaskRequest = (taskData: TaskFinish) => ({
  type: FINISH_TASK_REQUEST,
  payload: { taskData },
});

export const finishTaskSuccess = () => ({
  type: FINISH_TASK_SUCCESS,
});

export const finishTaskFailure = (error: string) => ({
  type: FINISH_TASK_FAILURE,
  payload: { error },
});