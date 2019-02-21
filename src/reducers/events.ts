import { Event, EventAction, Types } from "../types/events";

export default (state: Event[] = [], action : EventAction): Event[] => {
  switch (action.type) {
    case Types.FETCH_EVENTS_SUCCESS:
      return action.events;

    default:
      return state;
  }
};