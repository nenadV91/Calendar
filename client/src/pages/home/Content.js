import React, { Component } from 'react';
import {Grid, withStyles, Fab} from '@material-ui/core';
import {Add as AddIcon} from '@material-ui/icons';
import Calendar from 'components/calendar';
import Paper from 'components/paper';
import styles from './Content.style';
import classNames from 'classnames';


class Content extends Component {
  handleClick = () => {
    this.props.changeView("form")
  }

  render() {
    let {classes, isOpen} = this.props;

    return (
      <div className={classNames({
        [classes.root]: true,
        [classes.isOpen]: isOpen
      })}>
        <Grid container spacing={16}>
          <Grid className={classes.calendar} item sm={12} md={8}>
            <Calendar />
          </Grid>

          <Grid className={classes.paper} item sm={12} md={4}>
            <Paper />
          </Grid>
        </Grid>

        <Fab 
        color="primary" 
        aria-label="Add" 
        onClick={this.handleClick}
        className={classes.fab}>
        <AddIcon />
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Content)
