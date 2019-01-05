export const addNotify = payload => {
  return {
    type: "ADD_NOTIFY",
    payload
  };
};

export const deleteNotify = payload => {
  return {
    type: "DELETE_NOTIFY",
    payload
  };
};

export const editNotify = payload => {
  return {
    type: "EDIT_NOTIFY",
    payload
  };
};
