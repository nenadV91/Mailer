import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import {withSnackbar} from 'notistack';
import styles from './Clients.style';
import ReactTable from "react-table";
import columns from './columns';
import Header from 'components/header';

class Clients extends Component {
  render() {
    let {
      classes, 
      clients, 
      removeClient, 
      selectClient,
      history,
      enqueueSnackbar
    } = this.props;

    return (
      <div className={classes.root}>
        <Header
        label="Clients" 
        count={clients.length} />

        <ReactTable
        data={clients}
        className={classes.table}
        columns={columns({
          classes, 
          history,
          removeClient,
          selectClient,
          enqueueSnackbar
        })} />
      </div>
    );
  }
}

const WithSnackbar = withSnackbar(Clients)
const WithStyles = withStyles(styles)(WithSnackbar)
const WithRouter = withRouter(WithStyles)
export default WithRouter