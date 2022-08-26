import {
  FETCH_JOKES_REQUEST,
  FETCH_JOKES_SUCCESS,
  FETCH_JOKES_FAILURE,
} from "../actions/jokes-action.js";

const initialState = {
  jokes: [],
  error: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOKES_REQUEST:
      return { ...state, error: null };
    case FETCH_JOKES_SUCCESS:
      return { ...state, jokes: action.jokes };
    case FETCH_JOKES_FAILURE:
      return { ...state, jokes: [], error: action.error };
    default:
      return state;
  }
};
