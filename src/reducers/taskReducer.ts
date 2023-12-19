// userReducer.ts
import { Action } from 'redux';
import {
    FETCH_TASKS_REQUEST,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_FAILURE,
    CREATE_TASK_REQUEST,
    CREATE_TASK_SUCCESS,
    CREATE_TASK_FAILURE,
    FINISH_TASK_REQUEST,
    FINISH_TASK_SUCCESS,
    FINISH_TASK_FAILURE,
    EDIT_TASK_REQUEST,
    EDIT_TASK_SUCCESS,
    EDIT_TASK_FAILURE,
  } from '../actions/taskActions';
  

export interface Task {
  id: string;
  description: string;
  status: string;
  image?: File;
}
interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

interface GenericAction<T extends string, P> extends Action<T> {
  payload: P;
}

export interface FetchTasksRequestAction extends GenericAction<typeof FETCH_TASKS_REQUEST, object> {}
export interface FetchTasksSuccessAction extends GenericAction<typeof FETCH_TASKS_SUCCESS, { tasks: Task[] }> {}
export interface FetchTasksFailureAction extends GenericAction<typeof FETCH_TASKS_FAILURE, { error: string }> {}

export interface CreateTaskRequestAction extends GenericAction<typeof CREATE_TASK_REQUEST, object> {}
export interface CreateTaskSuccessAction extends GenericAction<typeof CREATE_TASK_SUCCESS, object> {}
export interface CreateTaskFailureAction extends GenericAction<typeof CREATE_TASK_FAILURE, { error: string }> {}

export interface FinishTaskRequestAction extends GenericAction<typeof FINISH_TASK_REQUEST, object> {}
export interface FinishTaskSuccessAction extends GenericAction<typeof FINISH_TASK_SUCCESS, object> {}
export interface FinishTaskFailureAction extends GenericAction<typeof FINISH_TASK_FAILURE, { error: string }> {}

export interface EditTaskRequestAction extends GenericAction<typeof EDIT_TASK_REQUEST, object> {}
export interface EditTaskSuccessAction extends GenericAction<typeof EDIT_TASK_SUCCESS, object> {}
export interface EditTaskFailureAction extends GenericAction<typeof EDIT_TASK_FAILURE, { error: string }> {}

// Tipo de todas as ações
type TaskActions =
  | FetchTasksRequestAction
  | FetchTasksSuccessAction
  | FetchTasksFailureAction
  | CreateTaskRequestAction
  | CreateTaskSuccessAction
  | CreateTaskFailureAction
  | FinishTaskRequestAction
  | FinishTaskSuccessAction
  | FinishTaskFailureAction
  | EditTaskRequestAction
  | EditTaskSuccessAction
  | EditTaskFailureAction;

export type { TaskActions };

const taskReducer = (state = initialState, action: TaskActions) => {
switch (action.type) {
    case FETCH_TASKS_REQUEST:
    return { ...state, loading: true, error: null };

    case FETCH_TASKS_SUCCESS:
    return { ...state, loading: false, tasks: action.payload.tasks };

    case FETCH_TASKS_FAILURE:
    return { ...state, loading: false, error: action.payload.error };

    case CREATE_TASK_REQUEST:
      return { ...state, loading: true, error: null };
    
    case CREATE_TASK_SUCCESS:
      return { ...state, loading: false };
    
    case CREATE_TASK_FAILURE:
      return { ...state, loading: false, error: action.payload.error }
    
    case FINISH_TASK_REQUEST:
      return { ...state, loading: true, error: null };
    
    case FINISH_TASK_SUCCESS:
      return { ...state, loading: false };
    
    case FINISH_TASK_FAILURE:
      return { ...state, loading: false, error: action.payload.error }
    
    case EDIT_TASK_REQUEST:
      return { ...state, loading: true, error: null };
    
    case EDIT_TASK_SUCCESS:
      return { ...state, loading: false };
    
    case EDIT_TASK_FAILURE:
      return { ...state, loading: false, error: action.payload.error }

    default:
      return state;
}
};

export default taskReducer;
  