import {
  FORM_CHANGE,
  FORM_DATE_CHANGE,
  FORM_CLEAR,
  FORM_CLEAR_DATE
} from 'redux/types';


export const handleFormChange = (data) => {
  return {type: FORM_CHANGE, payload: data}
}

export const handleFormDateChange = (event) => {
  return {type: FORM_DATE_CHANGE, payload: event}
}

export const formClear = () => {
  return {type: FORM_CLEAR}
}

export const formClearDate = () => {
  return {type: FORM_CLEAR_DATE}
}