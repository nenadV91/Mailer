import React, { Component } from 'react';

import {
  withStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography
} from '@material-ui/core';
import styles from './Panel.style';


import {
  ExpandMore as ExpandMoreIcon
} from '@material-ui/icons';


class MyPanel extends Component {
  render() {
    let {classes, title, children, name, expanded} = this.props;
    
    return (
      <ExpansionPanel 
      className={classes.panel}
      expanded={expanded === name}
      onChange={this.props.handleChange(name)}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{title}</Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails className={classes.details}>
          {children}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(MyPanel)
