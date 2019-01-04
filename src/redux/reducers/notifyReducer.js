import { combineReducers } from "redux";

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
      return [
        ...state,
        action.payload
      ]
    }
    default:
      return state;
  }
};

export default notify;
