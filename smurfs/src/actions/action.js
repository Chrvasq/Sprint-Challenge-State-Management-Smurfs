import axios from "axios";

// action type names stored as consts
export const GET_DATA_START = "GET_DATA_START";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

export const getData = () => dispatch => {
  dispatch({ type: GET_DATA_START });

  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({
        type: GET_DATA_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_DATA_FAILURE,
        payload: "Error Loading Data"
      })
    );
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: GET_DATA_START });

  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({
        type: GET_DATA_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_DATA_FAILURE,
        payload: "Error Adding Smurf"
      });
    });
};
