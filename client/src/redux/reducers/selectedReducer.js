import {
  SELECT_EVENT,
  REMOVE_SELECTED
} from 'redux/types';


export default (state = null, action) => {
  switch(action.type) {
    case SELECT_EVENT:
      return action.payload

    case REMOVE_SELECTED:
      return null;

    default:
      return state;
  }
}