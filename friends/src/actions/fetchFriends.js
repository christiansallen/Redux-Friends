import axios from "axios";

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_COMPLETE = "FETCH_FRIENDS_COMPLETE";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  axios
    .get("http://localhost:5000/api/friends")
    .then(res => dispatch({ type: FETCH_FRIENDS_COMPLETE, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err }));
};
