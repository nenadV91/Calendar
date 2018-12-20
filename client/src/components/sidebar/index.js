import React, { Component } from 'react';
import {Drawer, withStyles} from "@material-ui/core";
import styles from './index.style';
import Calendar from 'rc-calendar';
import Filters from './Filters';
import {connect} from 'react-redux';
import {changeFilter} from 'redux/actions';

class Sidebar extends Component {
  render() {
    let {
      classes,
      filters,
      changeFilter
    } = this.props;

    let drawerClass = {
      docked: classes.root,
      paper: classes.paper
    }

    return (
      <Drawer 
      open={true} 
      variant="permanent"
      classes={drawerClass}>
        <Calendar className={classes.calendar} />
        <Filters 
        filters={filters}
        changeFilter={changeFilter} />
      </Drawer>
    );
  }
}


export default connect(({filters}) => {
  return {filters}
}, {
  changeFilter
})(withStyles(styles)(Sidebar))
