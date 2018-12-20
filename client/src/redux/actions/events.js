import axios from 'axios';
import {
  GET_EVENTS,
  SELECT_EVENT,
  REMOVE_SELECTED,
  REMOVE_EVENT,
  CREATE_EVENT,
  UPDATE_EVENT,
  FORM_CLEAR,
  REQUEST_EVENTS,
  SUCCESS_EVENTS,
  REQUEST_EVENT_CREATE,
  SUCCESS_EVENT_CREATE,
  REQUEST_EVENT_UPDATE,
  SUCCESS_EVENT_UPDATE,
} from 'redux/types';


export const selectEvent = event => {
  return {type: SELECT_EVENT, payload: event}
}


export const removeSelected = event => {
  return {type: REMOVE_SELECTED}
}


export const getEvents = () => {
  return async dispatch => {
    dispatch({type: REQUEST_EVENTS})

    const res = await axios.get('/events');
    dispatch({type: GET_EVENTS, payload: res.data})
    dispatch({type: SUCCESS_EVENTS})
  }
}


export const removeEvent = id => {
  return async dispatch => {
    await axios.delete(`/events/${id}`)
    dispatch({type: REMOVE_SELECTED})
    dispatch({type: REMOVE_EVENT, payload: id})
  }
}


export const createEvent = event => {
  return async dispatch => {
    dispatch({type: REQUEST_EVENT_CREATE})

    const res = await axios.post('/events', event);
    dispatch({type: CREATE_EVENT, payload: res.data});
    dispatch({type: SUCCESS_EVENT_CREATE})
    dispatch({type: FORM_CLEAR})
    return res;
  }
}


export const updateEvent = ({id, update}) => {
  return async dispatch => {
    dispatch({type: REQUEST_EVENT_UPDATE});

    const res = await axios.patch(`/events/${id}`, update);
    dispatch({type: UPDATE_EVENT, payload: res.data});
    dispatch({type: SUCCESS_EVENT_UPDATE});
    dispatch({type: SELECT_EVENT, payload: res.data})
    return res;
  }
}