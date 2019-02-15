import { Event, EventAction, Types } from "../types/events";

const addEvent = (state: Event[], date: string, descr: string): Event[] => {
  return state;
}

const updateEvent = (state: Event[], date: string, descr: string): Event[] => {
  return state;
}

const deleteEvent = (state: Event[], date: string): Event[] => {
  return state;
}

export default (state: Event[] = [], action : EventAction): Event[] => {
  switch (action.type) {
    case Types.ADD_EVENT:
      return addEvent(state, action.date, action.descr);

    case Types.UPDATE_EVENT:
      return updateEvent(state, action.date, action.descr);

    case Types.DELETE_EVENT:
      return deleteEvent(state, action.date);

    default:
      return state;
  }
};