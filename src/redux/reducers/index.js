import { combineReducers } from "redux";
import notify from "./notifyReducer";
console.log('n', notify)
// набор существующих редюсеров
const rootReducer = combineReducers({
  notify: notify
});

export default rootReducer;
