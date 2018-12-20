import {
  GET_EVENTS,
  REMOVE_EVENT,
  CREATE_EVENT,
  UPDATE_EVENT
} from 'redux/types';

function parseEvent(event) {
  return {
    ...event,
    start: new Date(event.start),
    end: new Date(event.end),
    slots: event.slots.map(slot => new Date(slot))
  }
}

export default (state = [], action) => {
  switch(action.type) {
    case GET_EVENTS:
      return action.payload.map(parseEvent)


    case REMOVE_EVENT:
      return state.filter(({id}) => id !== action.payload);

    
    case CREATE_EVENT:
      return [...state, parseEvent(action.payload)]

    
    case UPDATE_EVENT:
      return state.map(event => {
        if(event.id === action.payload.id) {
          return {...event, ...parseEvent(action.payload)}
        } else return event;
      })


    default:
      return state;
  }
}