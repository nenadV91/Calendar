import {
  FORM_CHANGE,
  FORM_DATE_CHANGE,
  FORM_CLEAR,
  FORM_CLEAR_DATE
} from 'redux/types';

const calendar = {
  start: null,
  end: null,
  allDay: false
}

const fields = {
  type: "task"
}

const initial = {
  ...calendar,
  ...fields
}

export default (state = initial, action) => {
  switch(action.type) {
    case FORM_CHANGE:
      let {name, value} = action.payload;
      let update = {[name]: value}

      if(name === 'type') {
        if(value === 'birthday') update.allDay = true;
        else update.allDay = false;
      } 

      return {
        ...state,
        ...update
      }



    case FORM_DATE_CHANGE:
      return {
        ...state,
        ...action.payload
      }
      


    case FORM_CLEAR:
      return initial


      
    case FORM_CLEAR_DATE:
      return {
        title: state.title,
        description: state.description,
        ...initial
      }


    default:
      return state;
  }
}