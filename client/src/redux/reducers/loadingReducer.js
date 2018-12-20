import {
  REQUEST_EVENTS,
  SUCCESS_EVENTS,
  REQUEST_EVENT_CREATE,
  SUCCESS_EVENT_CREATE,
  REQUEST_EVENT_UPDATE,
  SUCCESS_EVENT_UPDATE
} from 'redux/types';


const initial = {
  events: false,
  eventForm: false,
  updateForm: false
}


export default (state = initial, action) => {
  switch(action.type) {
    case REQUEST_EVENTS:
      return {...state, events: true}
    
    case SUCCESS_EVENTS:
      return {...state, events: false}

    case REQUEST_EVENT_CREATE:
      return {...state, eventForm: true}

    case SUCCESS_EVENT_CREATE:
      return {...state, eventForm: false}

    case REQUEST_EVENT_UPDATE:
      return {...state, updateForm: true}

    case SUCCESS_EVENT_UPDATE:
      return {...state, updateForm: false}

    default:
      return state;
  }
}