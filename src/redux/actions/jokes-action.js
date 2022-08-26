export const FETCH_JOKES_REQUEST = "FETCH_JOKES_REQUEST";
export const FETCH_JOKES_SUCCESS = "FETCH_JOKES_SUCCESS";
export const FETCH_JOKES_FAILURE = "FETCH_JOKES_FAILURE";

export function getData(inputValue) {
  return { type: "FETCH_JOKES_REQUEST", payload: { inputValue } };
};
