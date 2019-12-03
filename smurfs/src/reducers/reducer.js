import {
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  ADD_SMURF
} from "../actions/action";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
