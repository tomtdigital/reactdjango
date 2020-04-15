import { GET_PROFILE, EDIT_PROFILE } from '../actions/types.js';

const initialState = {
  profile: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case EDIT_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
}
