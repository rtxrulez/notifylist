import { createStore, compose, applyMiddleware } from "redux";
// подключаем инструкцию для измеенния стейта
import rootReducer from "./reducers";

// const middleware = store => next => action => {
//   return next(action)
// }

function middleware(store) {
  return function(next) {
    return function(action) {
      return next(action);
    };
  };
}

const initStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState, // стейт по умолчанию
    compose(
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );

  return store;
};

// создание хронилища
// store = createStore();
export default initStore()


