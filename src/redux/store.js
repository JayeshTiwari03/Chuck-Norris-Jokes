import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { reducer } from "./reducers/jokes-reducer";
import watcherSaga from "./sagas/jokes-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// Then run the saga
sagaMiddleware.run(watcherSaga);
export default store;
