import React, { Component } from 'react';
import {withStyles} from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';
import {CancelPresentation as EmptyIcon} from '@material-ui/icons';
import {CircularProgress } from '@material-ui/core';
import {Select, MenuItem, Input} from '@material-ui/core';
import _ from 'lodash';
import moment from 'moment';
import styles from './Events.style';
import EventsGroup from './EventsGroup';


class Events extends Component {
  state = {
    timeFilter: "month"
  }

  groupByType = (events) => {
    return _.groupBy(events, 'type')
  }

  renderEvents = (events, classes, loading) => {
    if(loading.events) {
      return <div className={classes.loading}>
        <CircularProgress className={classes.progress} />
      </div>
    }

    if(!Object.keys(events).length) {
      return <div className={classes.empty}>
        <EmptyIcon />
        <h3>Nothing to do...</h3>
        <p>Looks like you do not have anything planned at this time.</p>
      </div>
    }

    return Object.entries(events).map(([type, values]) => {
      return <EventsGroup 
      selectEvent={this.props.selectEvent}
      changeView={this.props.changeView}
      events={values}
      key={type} 
      type={type}/>
    })
  }

  handleTimeFilterChange = (e) => {
    this.setState({timeFilter: e.target.value})
  }

  filterByTime = (events) => {
    let {timeFilter} = this.state, today = new Date();
    if(timeFilter === "all" || !timeFilter) return events;
    else return events.filter(({start}) => moment(start).isSame(today, timeFilter))
  }

  getTimeInterval() {
    let {timeFilter} = this.state;
    switch(timeFilter) {
      case 'all':
        return 'all time';

      case 'year':
        return `${moment().format("YYYY")} year`;

      case 'month':
        return moment().format("MMMM YYYY");

      case 'week':
        return 'current week';

      case 'day':
        return `today - ${moment().format("DD MMMM")}`;

      default:
        return moment().format("MMMM YYYY");
    }
  }

  render() {
    let {classes, events, loading} = this.props;
    let {timeFilter} = this.state;
    
    events = this.filterByTime(events);
    events = this.groupByType(events);

    let selectProps = {
      getContentAnchorEl: null,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      }
    }

    return (
      <div className={classes.root}>
        <div className={classes.titleRow}>
          <div> 
            <h3 className={classes.title}>Events List</h3>
            <div className={classes.timeInterval}> 
              <span>Events for:</span>
              <span>{this.getTimeInterval()}</span>
            </div>
          </div>

          <Select
          value={timeFilter}
          classes={{select: classes.timeFilter}}
          onChange={this.handleTimeFilterChange}
          MenuProps={selectProps}
          input={<Input name="type" />}>
            <MenuItem value={'day'}>Day</MenuItem>
            <MenuItem value={'week'}>Week</MenuItem>
            <MenuItem value={'month'}>Month</MenuItem>
            <MenuItem value={'year'}>Year</MenuItem>
            <MenuItem value={'all'}>All</MenuItem>
          </Select>
        </div>

        <Scrollbars className={classes.list} >
          {this.renderEvents(events, classes, loading)}
        </Scrollbars>
      </div>
    );
  }
}

export default withStyles(styles)(Events)
