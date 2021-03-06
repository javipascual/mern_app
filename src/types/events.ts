import { BasicAction } from "./actions";

export type Event = {
  id?: string,
  date: string,
  descr: string,
};

export const enum Types {
  FETCH_EVENTS = "FETCH_EVENTS",
  FETCH_EVENTS_SUCCESS = "FETCH_EVENTS_SUCCESS",
  ADD_EVENT = "ADD_EVENT",
  UPDATE_EVENT = "UPDATE_EVENT",
  DELETE_EVENT = "DELETE_EVENT",
}

export type FetchEventsAction = BasicAction<Types.FETCH_EVENTS> ;

export type FetchEventsSuccessAction = BasicAction<Types.FETCH_EVENTS_SUCCESS> & {
  readonly events: Event[];
};

export type AddEventAction = BasicAction<Types.ADD_EVENT> & {
  readonly date: string;
  readonly descr: string;
};

export type UpdateEventAction = BasicAction<Types.UPDATE_EVENT> & {
  readonly event: Event;
};

export type DeleteEventAction = BasicAction<Types.DELETE_EVENT> & {
  readonly id: string;
};


export type EventAction = FetchEventsSuccessAction;