import { Event } from "../types/events"

export type State = {
  events: Event[],
};

// in this example, it is the same as State
export interface StateProps {
  events: Event[];
}

export interface DispatchProps {
  addEvent: (date: string, descr: string) => void;
  updateEvent: (event: Event) => void;
  deleteEvent: (event: Event) => void;
}

export type Props = StateProps & DispatchProps;