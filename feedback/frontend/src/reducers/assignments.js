import { GET_ASSIGNMENTS, DELETE_ASSIGNMENT } from '../actions/types.js';

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
    default:
      return state;
  }
}
