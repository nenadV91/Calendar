import React, { Component } from 'react';
import Events from './Events';
import {connect} from 'react-redux';
import {
  selectEvent,
  changeView
} from 'redux/actions';


class EventsIndex extends Component {
  render() {
    return (
      <Events 
      loading={this.props.loading}
      selectEvent={this.props.selectEvent}
      changeView={this.props.changeView}
      events={this.props.events} />
    );
  }
}


function filterByType(events, filters) {
  return events.filter(({type}) => {
    return filters[type] !== false
  })
}


export default connect(({events, loading, filters}) => {
  return {
    events: filterByType(events, filters), 
    loading
  }
}, {
  selectEvent,
  changeView
})(EventsIndex)
