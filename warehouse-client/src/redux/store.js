import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
// import { createLogger } from "redux-logger";

import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";

// const logger = createLogger();

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
