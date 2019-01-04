import { createStore, compose } from "redux";
// подключаем инструкцию для измеенния стейта
import rootReducer from "./reducers";

export default initialState => {
  const store = createStore(
    rootReducer,
    initialState, // стейт по умолчанию
    compose(
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );

  return store;
};
 