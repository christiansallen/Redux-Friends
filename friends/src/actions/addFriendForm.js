import axios from "axios";

export const ADD_FRIEND_START = "ADD_FRIEND_START";
export const ADD_FRIEND_COMPLETE = "ADD_FRIEND_COMPLETE";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";

export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND_START });
  axios
    .post("http://localhost:5000/api/friends")
    .then(res => dispatch({ type: ADD_FRIEND_COMPLETE, payload: res.data }))
    .catch(err => dispatch({ type: ADD_FRIEND_FAILURE, payload: err }));
};
