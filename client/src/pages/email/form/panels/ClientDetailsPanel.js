import React, { Component } from 'react';
import {
  FormControl,
  InputLabel,
  TextField
} from '@material-ui/core';
import Panel from '../../panel/Panel';


class ClientDetailsPanel extends Component {
  render() {
    let {
      classes,
      expanded,
      state
    } = this.props;

    return (
      <Panel 
      name="panel-3"
      title="Client details"
      expanded={expanded}
      handleChange={this.props.handlePanelChange}>
        <FormControl className={classes.control} fullWidth>
          <InputLabel 
          shrink
          className={classes.radioLabel}  
          htmlFor="email">Clients email</InputLabel>

          <TextField
          id="email"
          placeholder="Clients email..."
          className={classes.textField}
          value={state.email}
          onChange={this.props.handleTextChange('email')}
          margin="normal" />
        </FormControl>

        <FormControl className={classes.control} fullWidth>
          <InputLabel 
          shrink
          className={classes.radioLabel}  
          htmlFor="name">Name</InputLabel>

          <TextField
          id="name"
          placeholder="Clients name..."
          className={classes.textField}
          value={state.name}
          onChange={this.props.handleTextChange('name')}
          margin="normal" />
        </FormControl>

        <FormControl className={classes.control} fullWidth>
          <InputLabel 
          shrink
          className={classes.radioLabel}  
          htmlFor="website">Website</InputLabel>

          <TextField
          id="website"
          placeholder="Clients website..."
          className={classes.textField}
          value={state.website}
          onChange={this.props.handleTextChange('website')}
          margin="normal" />
        </FormControl>

        <FormControl className={classes.control} fullWidth>
          <InputLabel 
          shrink
          className={classes.radioLabel}  
          htmlFor="source">Source</InputLabel>

          <TextField
          id="source"
          placeholder="Source website..."
          className={classes.textField}
          value={state.source}
          onChange={this.props.handleTextChange('source')}
          margin="normal" />
        </FormControl>
      </Panel>
    );
  }
}

export default ClientDetailsPanel
