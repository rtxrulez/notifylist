import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider, connect } from "react-redux";

import createStore from "./redux/store";
import { addNotify, deleteNotify, editNotify } from "./redux/actions/notifyActions";
import {
  getComments,
  getCommentsCounts
} from "./redux/reducers";

// создаем хронилище
let store = createStore();
store.dispatch(
  addNotify({
    desc: "Сожрать сгущенку",
    time: "18:30",
    isDone: false
  })
);

store.dispatch(
  deleteNotify(1)
)

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
