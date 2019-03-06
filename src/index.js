import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider, connect } from "react-redux";

import store from "./redux/store";
import { addNotify, deleteNotify, editNotify, timerAdd } from "./redux/actions/notifyActions";
import {
  getComments,
  getCommentsCounts
} from "./redux/reducers";

// store.dispatch(
//   addNotify({
//     desc: "Сожрать сгущенку",
//     time: "18:30",
//     isDone: false,
//     started: false
//   })
// );

// store.dispatch(
//   timerAdd([
//     {
//       desc: "Полить кактус",
//       time: "17:10",
//       isDone: false,
//       started: false
//     },
//     {
//       desc: "Зайти за хлебом",
//       time: "17:30",
//       isDone: true,
//       started: true
//     },
//     {
//       desc: "Позвонить другу",
//       time: "18:01",
//       isDone: true,
//       started: true
//     }
//   ])
// )

// store.dispatch(
//   deleteNotify(1)
// )

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <AppWithRedux /> */}
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
