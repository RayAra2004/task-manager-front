// userReducer.ts
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
  