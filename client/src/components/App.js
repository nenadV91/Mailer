import React, { Component } from 'react';
import {withStyles, CircularProgress } from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Navbar from 'components/navbar';
import Content from 'components/content'
import FormDialog from 'components/form_dialog'
import styles from 'assets/jss/global';

import {
  getClients, 
  openDialog, 
  closeDialog, 
  addClient,
  toggleSidebar
} from 'redux/actions';


class App extends Component {
  componentWillMount = () => {
    this.props.getClients()
  }

  content = () => {
    let {loaders, classes} = this.props;
    let loading = loaders.initial;

    if(loading) {
      return <div className={classes.loading}>
        <CircularProgress color="primary" disableShrink />
      </div>
    }

    return <div className={classes.layout}>
      <Content />
    </div>
  }

  render() {
    let {classes} = this.props;

    return (
      <div className={classes.root}>
        <Navbar 
        toggleSidebar={this.props.toggleSidebar}
        openDialog={this.props.openDialog} />

        <div className={classes.rootContent}>
          {this.content()}
        </div>

        <FormDialog 
        loaders={this.props.loaders}
        addClient={this.props.addClient}
        closeDialog={this.props.closeDialog}
        open={this.props.dialog} />
      </div>
    );
  }
}

const WithStyles = withStyles(styles)(App)
const WithConnect = connect(({dialog, loaders}) => {
  return {dialog, loaders}
}, {getClients, openDialog, closeDialog, addClient, toggleSidebar})(WithStyles)
const WithRouter = withRouter(WithConnect)
export default WithRouter;