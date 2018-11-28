var addNotify = function(notify) {
  return {
    type: "ADD_NOTIFY",
    notify
  };
};

module.exports = { addNotify };
