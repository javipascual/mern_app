import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { connect, Provider } from "react-redux";
import { addEvent, deleteEvent, fetchEvents, updateEvent } from "./actions/events";
import { store } from "./redux_app";
import { State, StateProps, DispatchProps } from "./types/app";
import { Event } from "./types/events";

const mapStateToProps = (state: State): StateProps => ({
  events: state.events,
});

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  fetchEvents: () => {
    dispatch(fetchEvents());
  },
  addEvent: (date: string, descr: string) => {
    dispatch(addEvent(date, descr));
  },
  updateEvent: (event: Event) => {
    dispatch(updateEvent(event));
  },
  deleteEvent: (event: Event) => {
    dispatch(deleteEvent(event.id!));
  },
});

const AppContainer = connect<StateProps, DispatchProps, {}, State>(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(<Provider store={store}><AppContainer/></Provider>, document.getElementById('root'));
