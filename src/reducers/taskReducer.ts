// userReducer.ts
import {
    FETCH_TASKS_REQUEST,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_FAILURE,
    CREATE_TASK_REQUEST,
    CREATE_TASK_SUCCESS,
    CREATE_TASK_FAILURE,
  } from '../actions/taskActions';
  

export interface Task {
  id: number;
  description: string;
  finished: boolean;
  image?: string;
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

const taskReducer = (state = initialState, action: any) => {
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

    default:
    return state;
}
};

export default taskReducer;
  