import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { connect, Provider } from "react-redux";
import { addEvent, deleteEvent, updateEvent } from "./actions/events";
import { store } from "./redux_app";
import { State, StateProps, DispatchProps } from "./types/app";

const mapStateToProps = (state: State): StateProps => ({
  events: state.events,
});

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  addEvent: (date: string, descr: string) => {
   dispatch(addEvent(date, descr));
  },
  updateEvent: (date: string, descr: string) => {
   dispatch(updateEvent(date, descr));
  },
  deleteEvent: (date: string) => {
    dispatch(deleteEvent(date));
  },
});

const AppContainer = connect<StateProps, DispatchProps, {}, State>(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(<Provider store={store}><AppContainer/></Provider>, document.getElementById('root'));
