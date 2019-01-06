import React, { Component } from 'react';
import {withStyles} from '@material-ui/core';
import styles from './Preview.style';

class Preview extends Component {
  render() {
    let {
      classes,
      template,
      fields
    } = this.props;

    const __html = template.html(fields)

    return (
      <div 
      className={classes.root}
      dangerouslySetInnerHTML={{__html}}></div>
    );
  }
}

export default withStyles(styles)(Preview)
