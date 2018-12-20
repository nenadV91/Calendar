import {combineReducers} from 'redux';
import eventsReducer from './eventsReducer';
import selectedReducer from './selectedReducer';
import formReducer from './formReducer';
import paperReducer from './paperReducer';
import loadingReducer from './loadingReducer';
import filtersReducer from './filtersReducer';


export default combineReducers({
  events: eventsReducer,
  selected: selectedReducer,
  form: formReducer,
  view: paperReducer,
  loading: loadingReducer,
  filters: filtersReducer
});