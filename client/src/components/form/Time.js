import React, { Component } from 'react';
import styles from './Time.style';

import {
  withStyles,
  TextField
} from '@material-ui/core';

import {
  Close as CloseIcon,
  DateRange as DateIcon
} from '@material-ui/icons';


import moment from 'moment';
import classNames from 'classnames';



class Time extends Component {
  render() {
    let {state, classes} = this.props;
    let date = date => moment(date).format('MMMM Do YYYY')
    let time = date => moment(date).format(' h:mm a')
    let emptyText = `Click or drag on calendar to select a date.`

    if(!state.start) {
      return <div className={classes.empty}>
        <DateIcon />
        <span>{emptyText}</span>
      </div>
    }

    let showTime = <div className={classes.time}>
      <div className={classNames(classes.timeItem, classes.start)}>
        <TextField 
        disabled
        variant="filled" 
        value={time(state.start)} />
      </div>

      <span> to </span>

      <div className={classNames(classes.timeItem, classes.end)}>
        <TextField 
        disabled
        variant="filled" 
        value={time(state.end)} />
      </div>

      <CloseIcon 
      onClick={this.props.handleClearDate}
      className={classes.clear} />      
    </div>

    let showDate = <div className={classes.dateItem}>
      <TextField 
      disabled fullWidth
      variant="filled" 
      value={date(state.start)} />
    </div>

    return <div className={classes.date}>
      {showDate}
      {state.type !== 'birthday' ? showTime : null}      
    </div>
  }
}

export default withStyles(styles)(Time)
