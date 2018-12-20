import React, { Component } from 'react';
import styles from './Filters.style';
import {
  withStyles,
  withTheme,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';

class Filters extends Component {
  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  handleChange = name => ({target: {checked}}) => {
    this.props.changeFilter({name, checked})
  };

  renderFilters = () => {
    let {classes, filters} = this.props;

    return Object.entries(filters).map(([type, checked]) => {
      let checkboxStyle = {
        root: classes.checkbox,
        checked: classes[`${type}Color`]
      }

      return <div key={type}>
        <FormControlLabel
        label={this.capitalize(type)}
        control={
          <Checkbox
            value={type}
            classes={checkboxStyle}
            checked={checked}
            onChange={this.handleChange(type)}
            color="primary"
          />
        }/>
      </div>
    })
  }

  render() {
    let {classes} = this.props;

    return (
      <div className={classes.root}>
        <h4 className={classes.title}>Display:</h4>

        {this.renderFilters()}
      </div>
    );
  }
}

export default withStyles(styles)(withTheme()(Filters))
