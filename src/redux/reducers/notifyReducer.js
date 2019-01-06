import { combineReducers } from "redux";
import { deleteNotify, timerAdd } from "../actions/notifyActions";

function immutableDelete(arr, index) {
  return arr.slice(0, index).concat(arr.slice(index + 1));
}

const store = [
  {
    desc: "Полить кактус",
    time: "17:10",
    isDone: false,
    started: false
  },
  {
    desc: "Зайти за хлебом",
    time: "17:30",
    isDone: true,
    started: true
  },
  {
    desc: "Позвонить другу",
    time: "18:01",
    isDone: true,
    started: true
  }
];

export const notify = (state = store, action) => {
  switch (action.type) {
    case "ADD_NOTIFY": {
      return [...state, action.payload];
    }
    case deleteNotify.toString(): {
      return immutableDelete(state, action.payload);
    }
    case "EDIT_NOTIFY": {
      return [...action.payload];
    }
    case timerAdd.toString(): {
      return [...action.payload];
    }
    default:
      return state;
  }
};
