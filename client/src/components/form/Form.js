import React, { Component } from 'react';
import {withStyles, TextField, Button, CircularProgress} from '@material-ui/core';
import {Select, Input, MenuItem, FormHelperText, FormControl} from '@material-ui/core';

import moment from 'moment';
import styles from './Form.style';
import { withSnackbar } from 'notistack';
import Time from './Time';


class Form extends Component {
  state = {
    errors: [],
    title: "",
    description: ""
  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.state.start !== this.props.state.start) {
      if(this.state.errors.length) {
        this.setState({errors: []})
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    let {state} = this.props;
    
    if(!state.start || !state.end) {
      return this.setError(`Please select a date on the calendar.`);
    }

    if(!this.state.title) {
      return this.setError(`Please add some title for the event.`)
    }

    state = {
      ...state,
      ...this.state
    }

    this.props.createEvent(state).then(res => {
      let {type, start} = res.data;
      let date = moment(start).format('MMMM Do');
      let msg = `New ${type} added for ${date}.`;
      this.props.changeView(null);
      this.props.enqueueSnackbar(msg)
    })
  }

  setError = (error) => {
    return this.setState(({errors}) => ({errors: [error, ...errors]}))
  }

  handleClearDate = () => {
    this.props.formClearDate();
  }

  handleChangeLocal = event => {
    let {name, value} = event.target;
    this.setState({[name]: value})
  }

  handleChange = event => {
    let {name, value} = event.target;
    this.props.handleFormChange({name, value, errors: []});
  }

  renderErrors = () => {
    let {errors} = this.state;
    let {classes} = this.props;

    return errors.map((error, i) => <div>
      <FormControl key={i} error>
        <FormHelperText className={classes.error}>{error}</FormHelperText>
      </FormControl>
    </div>)
  }


  render() {
    let {classes, state, loading} = this.props;
    let {title, description, type} = state;

    let selectProps = {
      getContentAnchorEl: null,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      }
    }

    return (
      <form onSubmit={this.handleSubmit} className={classes.root}>
        <div className={classes.titleRow}>
          <h3 className={classes.title}>Create new event</h3>

          <Select
          value={type}
          classes={{select: classes.typeSelect}}
          onChange={this.handleChange}
          MenuProps={selectProps}
          input={<Input name="type" />}>
          <MenuItem value={'task'}>Task</MenuItem>
          <MenuItem value={'reminder'}>Reminder</MenuItem>
          <MenuItem value={'birthday'}>Birthday</MenuItem>
          </Select>
        </div>

        <Time 
        handleClearDate={this.handleClearDate} 
        state={this.props.state} />

        <TextField
        fullWidth
        disabled={loading}
        name="title"
        value={title}
        onChange={this.handleChangeLocal}
        placeholder="Title..."
        margin="normal"
        variant="filled" />

        <TextField
        fullWidth
        rows={4}
        disabled={loading}
        name="description"
        multiline={true}
        value={description}
        onChange={this.handleChangeLocal}
        placeholder="Description..."
        margin="normal"
        variant="filled" />

        {this.renderErrors()}

        <div className={classes.controls}>
          <Button 
          disabled={loading}
          className={classes.button}
          variant="contained" 
          type="submit" 
          color="primary"> 
          <span>Create</span>
          </Button>

          {loading && <CircularProgress 
          className={classes.loader}
          size={20} />}
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(withSnackbar(Form))



