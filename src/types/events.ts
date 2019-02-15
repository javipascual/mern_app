import { BasicAction } from "./actions";

export type Event = {
  date: string,
  descr: string,
};

export const enum Types {
  ADD_EVENT = "ADD_EVENT",
  UPDATE_EVENT = "UPDATE_EVENT",
  DELETE_EVENT = "DELETE_EVENT",
}

export type AddEventAction = BasicAction<Types.ADD_EVENT> & {
  readonly date: string;
  readonly descr: string;
};

export type UpdateEventAction = BasicAction<Types.UPDATE_EVENT> & {
  readonly date: string;
  readonly descr: string;
};

export type DeleteEventAction = BasicAction<Types.DELETE_EVENT> & {
  readonly date: string;
};

export type EventAction = AddEventAction | UpdateEventAction | DeleteEventAction;