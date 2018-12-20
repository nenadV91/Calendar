import React, { Component } from 'react';
import {withStyles} from '@material-ui/core';
import styles from './EventsGroup.style';
import {
  Notes as TaskIcon,
  Cake as BirthdayIcon,
  NotificationsNone as ReminderIcon
} from '@material-ui/icons';
import moment from 'moment';


class EventsGroup extends Component {
  handleClick = event => {
    this.props.selectEvent(event);
    this.props.changeView('event');
  }

  renderEvents = () => {
    let {events, classes} = this.props;

    return events.map(event => {
      return <div 
        onClick={() => this.handleClick(event)} 
        key={event.id} 
        className={classes.event}>
        <div className={classes.iconWrapper}>
          <div className={classes.icon}>
            {this.icon(event)}
          </div>
        </div>

        <div className={classes.content}>
          <div className={classes.left}>
            <h4 className={classes.title}>{event.title}</h4>

            <div className={classes.date}>
              <span>{moment(event.start).format('MMM Do YY')}</span>
            </div>
          </div>
        </div>
      </div>
    })
  }

  icon = ({type}) => {
    if(type === 'task') {
      return <TaskIcon className={`${type}-icon`} />
    }

    if(type === 'reminder') {
      return <ReminderIcon className={`${type}-icon`} />
    }

    if(type === 'birthday') {
      return <BirthdayIcon className={`${type}-icon`} />
    }

  }

  render() {
    let {type, classes} = this.props;

    return <div className={classes.root}>
      <h4 className={classes.groupTitle}>{type}</h4>
      
      <div className={classes.events}>
        {this.renderEvents()}
      </div>
    </div>
  }
}

export default withStyles(styles)(EventsGroup)
