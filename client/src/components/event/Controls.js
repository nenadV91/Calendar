import React, { Component } from 'react';

import {
  Close as CloseIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  MoreVert as OptionsIcon
} from '@material-ui/icons'

import {
  Menu,
  MenuItem,
  IconButton,
  withStyles
} from '@material-ui/core';

import {
  removeSelected,
  removeEvent
} from 'redux/actions';

import styles from './Controls.style';
import {connect} from 'react-redux';
import {changeView} from 'redux/actions';


class Controls extends Component {
  state = {
    anchorEl: null
  }

  handleClose = () => {
    this.props.removeSelected()
    this.props.changeView(null)
  }

  handleEdit = () => {
    this.props.startEditing()
    this.closeMenu()
  }

  handleDelete = (id) => {
    this.props.removeEvent(id)
    this.props.changeView(null)
  }

  closeMenu = () => {
    this.setState({anchorEl: null})
  }

  toggleMenu = (e) => {
    this.setState({anchorEl: e.target})
  }

  render() {
    let {classes, selected} = this.props;
    let {anchorEl} = this.state;
    let open = Boolean(anchorEl);

    const iconStyle = {
      root: classes.controlIcon
    }

    return <div className={classes.controls}>
      <IconButton
      color="inherit"
      aria-label="Menu toggle"
      onClick={this.toggleMenu}>
      <OptionsIcon classes={iconStyle} />
      </IconButton>

      <IconButton
      color="inherit"
      aria-label="Close"
      onClick={this.handleClose}>
      <CloseIcon classes={iconStyle} />
      </IconButton>

      <Menu 
      classes={{paper: classes.menu}}
      anchorEl={anchorEl} 
      onClose={this.closeMenu} 
      open={open}>
        <MenuItem 
        classes={{root: classes.item}} 
        onClick={() => this.handleDelete(selected.id)} 
        key={1}>
          <DeleteIcon classes={{root: classes.icon}} />
          <span>Delete</span>
        </MenuItem>

        <MenuItem 
        onClick={this.handleEdit}
        classes={{root: classes.item}} 
        key={2}>
          <EditIcon
          classes={{root: classes.icon}} />
          <span>Edit</span>
        </MenuItem>
      </Menu>
    </div>
  }
}

export default connect(null, {
  removeSelected,
  changeView,
  removeEvent
})(withStyles(styles)(Controls))
