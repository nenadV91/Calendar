import {
  CHANGE_FILTER
} from 'redux/types';


export const changeFilter = data => {
  return {type: CHANGE_FILTER, payload: data}
}