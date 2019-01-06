import React, { Component } from 'react';

import {
  Typography,
  FormControl,
  InputLabel,
  TextField
} from '@material-ui/core';
import Panel from '../../panel/Panel'


class MailFieldsPanel extends Component {
  renderFormFields = () => {
    let {
      template, 
      classes, 
      loading,
      fields
    } = this.props;

    if(!template || !Object.keys(fields).length) {
      return <Typography>No defined fields for this template</Typography>
    }

    return template.fields.map(({slug, name}) => {
      return <FormControl 
      key={slug} 
      className={classes.control} 
      fullWidth>
        <InputLabel 
        shrink
        className={classes.radioLabel}  
        htmlFor={`${slug}-name`}>{name}</InputLabel>

        <TextField
        margin="normal"
        name={slug}
        disabled={loading}
        id={`${slug}-name`}
        placeholder={name}
        className={classes.textField}
        value={this.props.fields[slug]}
        onChange={this.props.handleFieldChange} />
      </FormControl>
    })
  }

  render() {
    let {
      expanded,
      handlePanelChange
    } = this.props;

    return (
      <Panel 
        name="panel-2"
        title="Template fields"
        expanded={expanded}
        handleChange={handlePanelChange}>
          {this.renderFormFields()}
        </Panel>
    );
  }
}

export default MailFieldsPanel
