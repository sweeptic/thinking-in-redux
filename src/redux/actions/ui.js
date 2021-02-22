// action_types;
export const SET_LOADER = 'SET_LOADER';

// action creators
export const setLoader = ({ state, feature }) => ({
  type: `${feature} ${SET_NOTIFICATION}`,
  payload: state,
  meta: { feature },
});
