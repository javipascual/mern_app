import { AddEventAction, FetchEventsAction, UpdateEventAction, DeleteEventAction, Event, Types } from "../types/events";

export const fetchEvents = (): FetchEventsAction => ({
  type: Types.FETCH_EVENTS,
});

export const addEvent = (date: string, descr: string): AddEventAction => ({
  type: Types.ADD_EVENT,
  date,
  descr,
});
  
export const updateEvent = (event: Event): UpdateEventAction => ({
  type: Types.UPDATE_EVENT,
  event,
});

export const deleteEvent = (id: string): DeleteEventAction => ({
  type: Types.DELETE_EVENT,
  id,
});