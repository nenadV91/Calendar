import React, { Component } from 'react';
import Form from './Form';
import {connect} from 'react-redux';
import {handleFormChange, formClear, formClearDate} from 'redux/actions';
import {createEvent, changeView} from 'redux/actions';

class FormIndex extends Component {
  render() {
    let {
      state,
      loading,
      formClear,
      createEvent,
      handleFormChange,
      formClearDate,
      changeView
    } = this.props;

    return (
      <Form
      state={state}
      loading={loading}
      formClear={formClear}
      changeView={changeView}
      createEvent={createEvent}
      formClearDate={formClearDate}
      handleFormChange={handleFormChange}/>
    );
  }
}

export default connect(({form, loading}) => {
  return {
    state: form,
    loading: loading.eventForm
  }
}, {
  handleFormChange,
  createEvent,
  formClearDate,
  formClear,
  changeView
})(FormIndex)
