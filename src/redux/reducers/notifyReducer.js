import { combineReducers } from "redux";

function immutableDelete(arr, index) {
  return arr.slice(0, index).concat(arr.slice(index + 1));
}

const store = [
  {
    desc: "Полить кактус",
    time: "17:10",
    isDone: true
  },
  {
    desc: "Зайти за хлебом",
    time: "17:30",
    isDone: true
  },
  {
    desc: "Позвонить другу",
    time: "18:01",
    isDone: true
  }
];

const notify = (state = store, action) => {
  switch (action.type) {
    case "ADD_NOTIFY": {
      return [...state, action.payload];
    }
    case "DELETE_NOTIFY": {
      return immutableDelete(state, action.payload);
    }
    default:
      return state;
  }
};

export default notify;