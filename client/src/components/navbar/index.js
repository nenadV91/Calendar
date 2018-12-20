import React, { Component } from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {withStyles, IconButton} from '@material-ui/core';
import {Menu as MenuIcon} from '@material-ui/icons';
import classNames from 'classnames';
import styles from './index.style';
import calendar_img from 'assets/imgs/calendar_3.png';

class MyNavbar extends Component {
  render() {
    let {classes} = this.props;

    return (
      <AppBar className={classes.root} position="static" color="default">
        <Toolbar classes={{root: classes.toolbar}}>
          <IconButton
          color="inherit"
          aria-label="Toggle sidebar"
          onClick={this.props.toggleSidebar}
          className={classNames(classes.toggle)} >
            <MenuIcon />
          </IconButton>

          <Typography  variant="h6" color="inherit">
            Calendar
          </Typography>

          <div className={classes.menu}>
            <img className={classes.img} src={calendar_img} alt=""/>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(MyNavbar)
