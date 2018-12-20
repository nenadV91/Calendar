import React, { Component } from 'react';
import {connect} from 'react-redux';
import {handleFormDateChange, selectEvent, changeView} from 'redux/actions';

import Calendar from './Calendar';

class MainCalendar extends Component {
  render() {
    return <Calendar
    form={this.props.form}
    changeView={this.props.changeView}
    handleFormDateChange={this.props.handleFormDateChange} 
    selected={this.props.selected}
    handleSelect={this.props.selectEvent}
    events={this.props.events} />
  }
}


function filterByType(events, filters) {
  return events.filter(({type}) => {
    return filters[type] !== false
  })
}


export default connect(({events, selected, form, filters}) => {
  return {
    events: filterByType(events, filters), 
    selected, 
    form
  }
}, {
  selectEvent,
  changeView,
  handleFormDateChange
})(MainCalendar)

