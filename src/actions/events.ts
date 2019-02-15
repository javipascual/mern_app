import { AddEventAction, UpdateEventAction, DeleteEventAction, Types } from "../types/events";

export const addEvent = (date: string, descr: string): AddEventAction => ({
  type: Types.ADD_EVENT,
  date,
  descr,
});
  
export const updateEvent = (date: string, descr: string): UpdateEventAction => ({
  type: Types.UPDATE_EVENT,
  date,
  descr,
});

export const deleteEvent = (date: string): DeleteEventAction => ({
  type: Types.DELETE_EVENT,
  date,
});