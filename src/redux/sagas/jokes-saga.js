import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest("FETCH_JOKES_REQUEST", workerSaga);
}

// function that makes the api request and returns a Promise for response

export function fetchJokes(input) {
  console.log(input);
  return axios({
    method: "get",
    url: `http://api.icndb.com/jokes/random/${input}/`,
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  try {
    const response = yield call(fetchJokes, action.payload.inputValue);
    const jokes = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: "FETCH_JOKES_SUCCESS", jokes });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "FETCH_JOKES_FAILURE", error });
  }
}
