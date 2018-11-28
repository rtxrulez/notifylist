import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./Redux/reducer";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

let store = createStore(reducer);

store.dispatch({
  type: "SET_STATE",
  state: {
    notifications: [
      {
          "desc": "Полить кактус",
          "time": "17:10",
          "isDone": true
      },
      {
          "desc": "Зайти за хлебом",
          "time": "17:30",
          "isDone": true
      },
      {
          "desc": "Позвонить другу",
          "time": "18:01",
          "isDone": true
      }
  ]
  }
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
