import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { createLogger } from "redux-logger";

import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";

const logger = createLogger();

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
