import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar'
import {withStyles} from '@material-ui/core';
import classNames from 'classnames';
import moment from 'moment';
import styles from './Calendar.style';

class Calendar extends Component {
  eventPropGetter = e => {
    let {classes} = this.props;

    return {className: classNames({
      [classes.event]: true,
      [classes.task]: e.type === 'task',
      [classes.reminder]: e.type === 'reminder',
      [classes.birthday]: e.type === 'birthday'
    })}
  }

  handleSelectEvent = event => {
   this.props.handleSelect(event)
   this.props.changeView('event')
  }

  handleSelect = event => {
    this.props.handleFormDateChange(event)
    this.props.changeView('form')
  }

  render() {
    const allViews = ['month', 'week', 'day']
    const localizer = BigCalendar.momentLocalizer(moment) 
    let {classes, events, selected, form} = this.props;

    const Event = props => {
      return <div className={classes.eventContent}>
        <span className={classes.eventTitle}>{props.event.title}</span>
      </div>
    }

    const WeekHeader = props => {
      return <div className={classes.weekDay}>
        <div className={classes.dayNum}>{moment(props.date).format('D')}</div>
        <div className={classes.dayStr}>{moment(props.date).format('ddd')}</div>
      </div>
    }

    let components = {
      event: Event,
      week: {
        header: WeekHeader
      }
    }

    if(form.start) {
      events = [...events, form]
    }

    return (
      <BigCalendar
      selected={selected}
      className={classes.root}
      components={components}
      onSelectSlot={this.handleSelect}
      eventPropGetter={this.eventPropGetter}
      onSelectEvent={this.handleSelectEvent}
      localizer={localizer}
      views={allViews}
      events={events}
      selectable={true}
      defaultView="week"
      startAccessor="start"
      endAccessor="end" />
    );
  }
}

export default withStyles(styles)(Calendar)
