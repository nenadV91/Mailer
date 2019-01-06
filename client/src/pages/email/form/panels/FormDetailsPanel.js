import React, { Component } from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  Button,
  CircularProgress,
  FormHelperText
} from '@material-ui/core';
import Panel from '../../panel/Panel';


class FormDetailsPanel extends Component {
  getError = (field) => {
    let {errors} = this.props;
    if(!errors) return null;
    return errors.find(err => err.field === field);
  }

  hasError = (field) => {
    return Boolean(this.getError(field))
  }

  renderError = (field) => {
    let error = this.getError(field)
    return error ? <FormHelperText>{error.message}</FormHelperText> : null
  }

  render() {
    let {
      classes,
      expanded,
      loading,
      state,
      templateName,
      handleTextChange,
      handlePanelChange,
      changeTemplate
    } = this.props;

    return (
      <Panel 
      name="panel-1"
      title="Form details"
      expanded={expanded}
      handleChange={handlePanelChange}>
        <FormControl 
        error={this.hasError('template')}
        className={classes.control} 
        fullWidth>
          <InputLabel 
          shrink
          className={classes.radioLabel}  
          htmlFor="email-template">Email template</InputLabel>

          <Select
          disabled={loading}
          id="email-template"
          onChange={changeTemplate} 
          value={templateName}>
            <MenuItem value="initial">None</MenuItem>
            <MenuItem value="contact">Contact</MenuItem>
            <MenuItem value="followup">Follow up</MenuItem>
          </Select>

          {this.renderError('template')} 
        </FormControl>



        <FormControl 
        error={this.hasError('email')}
        className={classes.control} 
        fullWidth>
          <InputLabel 
          shrink
          className={classes.radioLabel}  
          htmlFor="to">Send email to</InputLabel>

          <TextField
          id="to"
          disabled={loading}
          placeholder="Send email to..."
          className={classes.textField}
          value={state.email}
          onChange={handleTextChange('email')}
          margin="normal" />

          {this.renderError('email')} 
        </FormControl>



        <FormControl 
        error={this.hasError('subject')}
        className={classes.control} 
        fullWidth>
          <InputLabel 
          shrink
          className={classes.radioLabel}  
          htmlFor="subject">Subject</InputLabel>

          <TextField
          disabled={loading}
          id="subject"
          placeholder="Subject..."
          className={classes.textField}
          value={state.subject}
          onChange={handleTextChange('subject')}
          margin="normal" />

          {this.renderError('subject')} 
        </FormControl>

        <div className={classes.controls}>
          <Button 
          size="small"
          disabled={loading}
          variant="contained"
          color="primary"
          type="submit">
          Send email</Button>

          {loading && <CircularProgress 
            className={classes.spinner}
            size={20} />}
        </div>
      </Panel>
    );
  }
}

export default FormDetailsPanel
