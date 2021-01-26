export const addEvent = id => {
  return {
    type: ADD_EVENT,
    id
  };
};

export const removeEvent = id => {
  return {
    type: REMOVE_EVENT,
    id,
  };
};

export const emptyEvent = () => {
  return {
    type: EMPTY_EVENTS,
  };
};
