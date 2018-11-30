import { combineReducers } from "redux";
import {ADD_COMMENT} from "../actions/commentsTypes"

const comments = (state = { count: 0, comments: [] }, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      return {
        ...state,
        comments: [...state.comments, action.payload],
        count: state.count + 1
      };
    }
    default:
      return state;
  }
};

const users = (state = { count: 0, users: [] }, action) => {
  switch (action.type) {
    case "ADD_USER": {
      console.log("user st", state);
      return { 
        users: [...state.users, action.payload],
        count: state.count + 1
      };
    }
    default:
      return state;
  }
};

export default combineReducers({
  comments,
  users
});

// нужно чтобы скрыть структуру редюсеров если понадобится изменить название полей.
// в внешних приложениях юзается только это название
export const getCommentsCounts = state => 
  state.comments.count

export const getComments = state => 
  state.comments
