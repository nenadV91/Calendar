import React, { Component } from 'react';
import Event from './Event';
import {connect} from 'react-redux';
import {updateEvent} from 'redux/actions';

class EventIndex extends Component {
  render() {
    return (
      <Event 
      loading={this.props.loading}
      updateEvent={this.props.updateEvent}
      selected={this.props.selected} />
    );
  }
}

export default connect(({selected, loading}) => {
  return {selected, loading: loading.updateForm}
}, {
  updateEvent
})(EventIndex)
