import axios from "axios";
import { Event } from "../types/events"

const eventsRoute = "http://localhost:4000/events";

export const EventsAPI = {
  fetchAll: () => axios.get(`${eventsRoute}/`),
  add: (event: Event) => axios.post(`${eventsRoute}/add/`, event),
  edit: (event: Event) => axios.put(`${eventsRoute}/edit/${event.id}`, event),
  delete: (id: string) => axios.delete(`${eventsRoute}/delete/${id}`)
}