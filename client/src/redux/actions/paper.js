import {
  CHANGE_VIEW
} from 'redux/types';


export const changeView = (view) => {
  return {type: CHANGE_VIEW, payload: view}
}
