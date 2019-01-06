import React, { Component } from 'react';
import {
  withStyles
} from '@material-ui/core';
import styles from './Emails.style';
import Header from 'components/header';
import ReactTable from "react-table";
import columns from './columns';

import {
  ArrowBackIos as BackIcon
} from '@material-ui/icons';

import {
  Redirect
} from 'react-router-dom'


class Details extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.goBack()
  }

  renderContent = () => {
    let {client, classes} = this.props;
    
    if(!client.emails || !client.emails.length) {
      return <div className={classes.empty}>
        <div className={classes.emptyText}>Zero emails sent to this client.</div>
      </div>
    }

    return <ReactTable
      data={client.emails}
      className={classes.table}
      columns={columns({classes})} />
  }

  render() {
    let {
      client,
      classes
    } = this.props;

    if(!client) {
      return <Redirect to="/clients" />
    }

    return (
      <div className={classes.root}>
        <Header
        label={<div>
          <div>Emails</div>
          
          <div><a 
          className={classes.back}
          onClick={this.handleClick} 
          href="about:blank"><BackIcon className={classes.icon} /> Go back</a></div>
        </div>}
        count={client.emails.length} />

        {this.renderContent()}
      </div>
    );
  }
}


export default withStyles(styles)(Details)
