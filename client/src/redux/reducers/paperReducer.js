import {
  CHANGE_VIEW
} from 'redux/types';


export default (state = null, action) => {
  switch(action.type) {
    case CHANGE_VIEW:
      return action.payload;

    default:
      return state;
  }
}