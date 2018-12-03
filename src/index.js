import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider, connect } from "react-redux";

import createStore from "./redux/store";
import { addComment } from "./redux/actions/commentsActions";
import { getComments, getCommentsCounts } from "./redux/reducers";

// создаем хронилище
let store = createStore();

console.log("st1", store.getState());

store.dispatch(addComment("Hello World"));

store.dispatch(addComment("Hello World 2"));

store.dispatch(addComment("Hello World 3"));

store.dispatch({
  type: "ADD_USER",
  payload: "Rtx"
});

console.log("st2", store.getState());

// store.dispatch({
//   type: "SET_STATE",
//   state: {
//     notifications: [
//       {
//           "desc": "Полить кактус",
//           "time": "17:10",
//           "isDone": true
//       },
//       {
//           "desc": "Зайти за хлебом",
//           "time": "17:30",
//           "isDone": true
//       },
//       {
//           "desc": "Позвонить другу",
//           "time": "18:01",
//           "isDone": true
//       }
//   ]
//   }
// });

const mapStateToProps = state => ({
  commentsCount: getCommentsCounts(state),
  comments: getComments(state)
});

const mapDispatchToProps = {
  addComment
};

const AppWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppWithRedux />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
