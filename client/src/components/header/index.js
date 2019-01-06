import React, { Component } from 'react';
import {withStyles} from '@material-ui/core';
import styles from './index.style';

class Header extends Component {
  render() {
    let {classes, label, count} = this.props;

    return (
      <div className={classes.root}>
        <h3 className={`${classes.title}`}>{label}</h3>

        <div className={classes.right}>
          <strong>{count}</strong>
          <span>results found</span>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Header)
