import { applyMiddleware, combineReducers, createStore } from 'redux';
import events from "./reducers/events";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/events";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  events,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);