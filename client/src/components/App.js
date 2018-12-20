import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import Home from 'pages/home';
import Navbar from 'components/navbar';
import styles from 'assets/jss/global';
import {connect} from 'react-redux';
import {getEvents, changeView, formClear, removeSelected} from 'redux/actions';

class App extends Component {
  state = {
    sidebar: false
  }

  handleEsc = (event) => {
    if(event.keyCode === 27) {
      this.props.formClear();
      this.props.removeSelected();
      this.props.changeView(null);
    }
  }

  componentDidMount = () => {
    document.addEventListener('keydown', this.handleEsc, false)
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleEsc, false);
  }

  toggleSidebar = () => {
    this.setState(({sidebar}) => ({sidebar: !sidebar}))
  }

  componentWillMount() {
    this.props.getEvents();
  }

  render() {
    let {sidebar} = this.state;
    
    return (
      <div className="app">
        <Navbar toggleSidebar={this.toggleSidebar} />

        <Switch>
          <Route path="/" render={props => <Home {...props} sidebar={sidebar} />} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, {
  getEvents,
  changeView,
  formClear,
  removeSelected
})(withStyles(styles)(App))
