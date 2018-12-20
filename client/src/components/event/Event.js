import React, { Component, Fragment } from 'react';
import {withStyles} from '@material-ui/core';
import classNames from 'classnames';
import moment from 'moment';
import styles from './Event.style';
import Controls from './Controls';
import {
  Notes as TaskIcon,
  Cake as BirthdayIcon,
  NotificationsNone as ReminderIcon
} from '@material-ui/icons';

import {
  TextField,
  Button
} from '@material-ui/core';
import { withSnackbar } from 'notistack';


class Event extends Component {
  state = {
    isEditing: false,
    title: "",
    description: ""
  }

  componentWillMount = () => {
    this.initial = {
      isEditing: false,
      title: "",
      description: ""
    }
  }

  content = () => {
    let {classes, selected} = this.props;
    if(!selected) return null;

    const headerClass = classNames({
      [classes.header]: true,
    })

    return <Fragment>
      {this.header({selected, classes, headerClass})}
      {this.main({selected, classes})}
    </Fragment>
  }

  startEditing = () => {
    let {selected: {title, description}} = this.props;
    this.setState({isEditing: true, title, description})
  }

  cancelEditing = () => {
    this.setState(this.initial)
  }

  handleSubmit = () => {
    let {title, description} = this.state;

    this.props.updateEvent({
      id: this.props.selected.id,
      update: {title, description}
    }).then(res => {
      this.cancelEditing();
      this.props.enqueueSnackbar(`${res.data.type} updated.`)
    })
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value})
  }

  header = ({selected, classes, headerClass}) => {
    let icons = {
      task: TaskIcon,
      reminder: ReminderIcon,
      birthday: BirthdayIcon
    }

    let Icon = icons[selected.type]

    const time = selected.type === 'birthday' ? null :
      <div className={classes.time}>
        <span>{moment(selected.start).format('h:mma')}</span>
        <span> - {moment(selected.end).format('h:mma')}</span>
      </div>

    const date = <div className={classes.date}>
      <span>{moment(selected.start).format('dddd, MMM Do')}</span>
    </div>

    return <header className={headerClass}>
      <div className={classes.haderInfo}>
        <Icon className={classes[selected.type]} />
        <div className={classes.headerInfoText}>{date}{time}</div>
      </div>

      <Controls 
      startEditing={this.startEditing}
      selected={selected} />
    </header>
  }

  main = ({selected, classes}) => {
    return <main className={classes.main}>
      {this.title()}
      {this.description()}
      {this.editControls()}
    </main>
  }

  title = () => {
    let {isEditing} = this.state;
    let {classes, selected, loading} = this.props;
    if(!isEditing) return <h3 className={classes.title}>{selected.title}</h3>
    
    return <div>
      <TextField 
      fullWidth
      name="title"
      margin="normal"
      variant="filled"
      disabled={loading}
      placeholder="Title..."
      onChange={this.handleChange}
      value={this.state.title} />
    </div>
  }

  description = () => {
    let {isEditing} = this.state;
    let {classes, selected, loading} = this.props;
    if(!isEditing) return <p className={classes.description}>{selected.description}</p>
    
    return <div>
      <TextField
        fullWidth
        rows={6}
        spellCheck="false"
        name="description"
        multiline={true}
        disabled={loading}
        onChange={this.handleChange}
        value={this.state.description}
        placeholder="Description..."
        margin="normal"
        variant="filled" />
    </div>
  }

  editControls = () => {
    let {classes, loading} = this.props;
    let {isEditing} = this.state;
    if(!isEditing) return null;

    return <div className={classes.editButtons}>
      <Button 
      variant="contained"
      disabled={loading}
      onClick={this.handleSubmit} 
      color="primary">Save</Button>

      <Button 
      variant="contained"
      disabled={loading}
      onClick={this.cancelEditing} 
      color="default">Cancel</Button>
    </div>
  }

  render() {
    return this.content()
  }
}

export default withStyles(styles)(withSnackbar(Event))
