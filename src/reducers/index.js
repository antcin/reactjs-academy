import { RECEIVE_PHOTOS } from "../actions";
import { combineReducers } from "redux";

function photosReducer(state = [], action) {
  console.log(state);
  switch (action.type) {
    case RECEIVE_PHOTOS:
      console.log(action.type);
      return [...state, action.photos];
    default:
      return state;
  }
}

export default combineReducers({
  photos: photosReducer
});
