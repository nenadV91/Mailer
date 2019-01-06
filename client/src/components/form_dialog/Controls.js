import React, { Component } from 'react';
import {withStyles} from '@material-ui/core';
import {Button, CircularProgress} from '@material-ui/core';
import styles from './Form.style';

class Controls extends Component {
  render() {
    let {loading, classes} = this.props;

    return (
      <div className={classes.controls}>
        <Button 
        type="submit"
        color="primary"
        disabled={loading}
        variant="contained">
        Add client</Button>

        <Button 
        variant="contained"
        disabled={loading}
        className={classes.clear}
        onClick={this.props.onClear}>
        Clear form</Button>

        {loading && <CircularProgress 
          className={classes.loader}
          size={24} />}
      </div>
    );
  }
}

export default withStyles(styles)(Controls)
