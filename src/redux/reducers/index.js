import { combineReducers } from "redux";
import {notify} from "./notifyReducer";

// набор существующих редюсеров
const rootReducer = combineReducers({
  notify: notify
});

export default rootReducer;
