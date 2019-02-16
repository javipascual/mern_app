export type State = {
  events: Event[],
};

// in this example, it is the same as State
export interface StateProps {
  events: Event[];
}

export interface DispatchProps {
  addEvent: (date: string, descr: string) => void;
  updateEvent: (date: string, descr: string) => void;
  deleteEvent: (date: string) => void;
}

export type Props = StateProps & DispatchProps;