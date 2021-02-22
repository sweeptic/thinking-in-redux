// action_types;
const API_SUCCESS = 'API_SUCCESS';
const API_ERROR = 'API_ERROR';
const API_REQUEST = 'API_REQUEST';

//action creators
export const apiRequest = ({ body, method, url, feature }) => ({
  type: `${feature} ${API_REQUEST}`,
  payload: body,
  meta: { method, url, feature },
});

export const apiSuccess = ({ response, feature }) => ({
  type: `${feature} ${API_REQUEST}`,
  payload: response,
  meta: { feature },
});

export const apiError = ({ error, feature }) => ({
  type: `${feature} ${API_ERROR}`,
  payload: error,
  meta: { feature },
});
