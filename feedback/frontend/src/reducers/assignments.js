import {
  GET_ASSIGNMENTS,
  DELETE_ASSIGNMENT,
  ADD_ASSIGNMENT,
} from '../actions/types.js';

const initialState = {
  assignments: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ASSIGNMENTS:
      return {
        ...state,
        assignments: action.payload,
      };
    case DELETE_ASSIGNMENT:
      return {
        ...state,
        assignments: state.assignments.filter(
          assignment => assignment.id !== action.payload
        ),
      };
    case ADD_ASSIGNMENT:
      return {
        ...state,
        assignments: [...state.assignments, action.payload],
      };
    default:
      return state;
  }
}
