import { combineReducers, createStore } from 'redux';
import events from "./reducers/events";

const rootReducer = combineReducers({
  events,
});

export const store = createStore(rootReducer);