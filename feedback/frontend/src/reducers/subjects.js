import { GET_SUBJECTS, DELETE_SUBJECT, ADD_SUBJECT } from '../actions/types.js';

const initialState = {
  subjects: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SUBJECTS:
      return {
        ...state,
        subjects: action.payload,
      };
    case DELETE_SUBJECT:
      return {
        ...state,
        subjects: state.subjects.filter(
          subject => subject.id !== action.payload
        ),
      };
    case ADD_SUBJECT:
      return {
        ...state,
        subjects: [...state.subjects, action.payload],
      };
    default:
      return state;
  }
}
