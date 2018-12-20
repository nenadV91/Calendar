import {
  CHANGE_FILTER
} from 'redux/types';

const initial = {
  task: true,
  reminder: true,
  birthday: true
}

export default (state = initial, action) => {
  switch(action.type) {
    case CHANGE_FILTER:
      let {
        name,
        checked
      } = action.payload;

      return {
        ...state,
        [name]: checked
      }

    default:
      return state;
  }
}