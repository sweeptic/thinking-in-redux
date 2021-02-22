// action_types;
const SET_NOTIFICATION = 'SET_NOTIFICATION';

// action creators
export const setNotification = ({ message, feature }) => ({
  type: `${feature} ${SET_NOTIFICATION}`,
  payload: message,
  meta: { feature },
});
