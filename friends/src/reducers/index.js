import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_COMPLETE,
  FETCH_FRIENDS_FAILURE
} from "../actions/index";

import {
  ADD_FRIEND_START,
  ADD_FRIEND_COMPLETE,
  ADD_FRIEND_FAILURE
} from "../actions/index";

const initialState = {
  isFetchingFriends: false,
  friendsFetched: false,
  friendsError: "",

  isSavingFriends: false,
  friendsSaved: false,
  saveFriendError: false,

  isUpdatingFriend: false,
  friendUpdated: false,

  isDeletingFriend: false,
  friendDeleted: false,

  friends: [],
  error: null
};

const friends = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_START:
      return {
        ...state,
        isFetchingFriends: true,
        friendsFetched: false
      };
    case FETCH_FRIENDS_COMPLETE:
      return {
        ...state,
        isFetchingFriends: false,
        friendsFetched: true,
        friends: action.payload
      };
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        isFetchingFriends: false,
        friendsFetched: false,
        friendsError: action.payload
      };
    case ADD_FRIEND_START:
      return {
        ...state,
        isSavingFriends: true,
        friendsSaved: false
      };
    case ADD_FRIEND_COMPLETE:
      return {
        ...state,
        isSavingFriends: false,
        friendsSaved: true,
        friends: action.payload
      };
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        isSavingFriends: false,
        friendsSaved: false,
        saveFriendError: action.payload
      };
    default:
      return state;
  }
};

export default friends;
