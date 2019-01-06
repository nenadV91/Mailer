import React, { Component } from 'react';
import {List, ListItem, Switch} from '@material-ui/core';

import {
  Close as CloseIcon
} from '@material-ui/icons';
import Panel from '../../panel/Panel';



class UserDetailsPreview extends Component {
  render() {
    let {
      classes,
      state,
      expanded
    } = this.props;

    return (
      <Panel 
      name="panel-0"
      title="Selected user"
      expanded={expanded}
      handleChange={this.props.handlePanelChange}>
        <List>
          <ListItem style={{marginBottom: 15}} className={classes.switchItem}>
            <div className={classes.label}>Remove selected user</div>
            
            <CloseIcon 
            className={classes.closeIcon}
            onClick={this.props.handleRemove} />
          </ListItem>

          <ListItem className={classes.userItem}>
            <div className={classes.label}>Name</div>
            <div className={classes.value}>{state.name || 'No defined name'}</div>
          </ListItem>

          <ListItem className={classes.userItem}>
            <div className={classes.label}>Email</div>
            <div className={classes.value}>{state.email || 'No defined email'}</div>
          </ListItem>

          <ListItem className={classes.userItem}>
            <div className={classes.label}>Website</div>
            <div className={classes.value}>{state.website || 'No defined website'}</div>
          </ListItem>

          <ListItem className={classes.switchItem}>
            <div className={classes.label}>Update client details</div>

            <Switch
            checked={state.update}
            onChange={this.props.handleSwitchChange('update')}
            value="update"
            color="primary" />
          </ListItem>


        </List>
      </Panel>
    );
  }
}

export default UserDetailsPreview
