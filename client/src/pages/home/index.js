import React, { Component } from 'react';
import {withStyles} from '@material-ui/core';
import Sidebar from 'components/sidebar';
import Content from './Content';
import styles from './index.style';
import {changeView} from 'redux/actions';
import {connect} from 'react-redux';
import {CircularProgress} from '@material-ui/core';
import classNames from 'classnames';

class Home extends Component {
  render() {
    let {classes, sidebar, changeView, loading} = this.props;

    if(loading.events) {
      return <div className={classNames({
        [classes.root]: true,
        [classes.loading]: true
      })}>
        <CircularProgress />
      </div>
    }

    return (
      <div className={classes.root}>
        <Sidebar isOpen={sidebar} />
        <Content changeView={changeView} isOpen={sidebar} />
      </div>
    );
  }
}

export default connect(({loading}) => {
  return {loading}
}, {
  changeView
})(withStyles(styles)(Home))