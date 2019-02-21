import { call, put, takeEvery, all } from "redux-saga/effects";
import { EventsAPI } from "../apis/events";
import { AddEventAction, UpdateEventAction, DeleteEventAction, Types } from "../types/events";

const toEvents = (arr: any) =>
  arr.map((obj: any) => ({ id: obj._id, date: obj.date, descr: obj.descr }) );

export function* eventsFetchList() {
  try {
    const response = yield call(EventsAPI.fetchAll);
    const events = toEvents(response ? response.data : {});
    yield put({ type: Types.FETCH_EVENTS_SUCCESS, events });
  }
  catch (error) {
    console.log(error)
  }
}

export function* watchEventsFetch() {
  yield takeEvery(Types.FETCH_EVENTS, eventsFetchList)
}

export function* eventsAdd(action: AddEventAction) {
  try {
    yield call(EventsAPI.add, { date: action.date, descr: action.descr });
    const response = yield call(EventsAPI.fetchAll);
    const events = toEvents(response ? response.data : {});
    yield put({ type: Types.FETCH_EVENTS_SUCCESS, events });
  }
  catch (error) {
    console.log(error)
  }
}

export function* watchEventsAdd() {
  yield takeEvery(Types.ADD_EVENT, eventsAdd)
}

export function* eventsUpdate(action: UpdateEventAction) {
  try {
    yield call(EventsAPI.edit, action.event);
    const response = yield call(EventsAPI.fetchAll);
    const events = toEvents(response ? response.data : {});
    yield put({ type: Types.FETCH_EVENTS_SUCCESS, events });
  }
  catch (error) {
    console.log(error)
  }
}

export function* watchEventsUpdate() {
  yield takeEvery(Types.UPDATE_EVENT, eventsUpdate)
}

export function* eventsDelete(action: DeleteEventAction) {
  try {
    yield call(EventsAPI.delete, action.id);
    const response = yield call(EventsAPI.fetchAll);
    const events = toEvents(response ? response.data : {});
    yield put({ type: Types.FETCH_EVENTS_SUCCESS, events });
  }
  catch (error) {
    console.log(error)
  }
}

export function* watchEventsDelete() {
  yield takeEvery(Types.DELETE_EVENT, eventsDelete)
}


export function* rootSaga() {
  yield all([
    watchEventsFetch(),
    watchEventsAdd(),
    watchEventsUpdate(),
    watchEventsDelete()
  ])
}