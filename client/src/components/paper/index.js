import React, { Component} from 'react';
import {withStyles} from '@material-ui/core';
import styles from './index.style';
import {connect} from 'react-redux';

import Event from 'components/event';
import Form from 'components/form';
import Events from 'components/events';

class Paper extends Component {
  changeView = () => {
    let {view} = this.props;

    if(!view) {
      return <Events />
    }

    if(view === 'form') {
      return <Form />
    }

    if(view === 'event') {
      return <Event />
    }
  }

  render() {
    let {classes} = this.props;

    return (
      <div className={classes.root}>
        {this.changeView()}
      </div>
    );
  }
}

export default connect(({view}) => {
  return {view}
})(withStyles(styles)(Paper))
