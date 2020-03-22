import {
  GET_ALL_TASKS,
  DELETE_TASK,
  ADD_TASK,
  GET_TASK,
  EDIT_TASK,
} from '../actions/types.js';

const initialState = {
  tasks: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case GET_TASK:
      return {
        ...state,
        task: action.payload,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
}
