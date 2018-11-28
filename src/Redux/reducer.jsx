var Map = require("immutable").Map;
 
var reducer = function(state = Map(), action) {
  switch (action.type) {
    case "ADD_NOTIFY":
        return state.update("notifications", (notifications) => notifications.push(action.notify));
  }
  return state;
}
module.exports = reducer;
