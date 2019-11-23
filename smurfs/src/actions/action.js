import axios from "axios";

// action type names stored as consts
export const GET_DATA_START = "GET_DATA_START";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";
export const ADD_SMURF = "ADD_SMURF";

export const getData = () => dispatch => {
  dispatch({ type: GET_DATA_START });

  axios
    .get("http://localhost:3333/smurfs")
    .then(res =>
      dispatch({
        type: GET_DATA_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
