import React, { Component } from 'react';
import {withStyles} from '@material-ui/core'
import {connect} from 'react-redux';
import styles from './index.style';
import {selectClient} from 'redux/actions';

import Sidebar from 'components/sidebar';
import Details from './Details';
import Emails from './Emails';


class ClientPage extends Component {
  render() {
    let {
      classes,
      client
    } = this.props;

    return (
      <div className={classes.root}>
        <Sidebar isOpen={this.props.sidebar}>
          <Details
          history={this.props.history} 
          selectClient={this.props.selectClient}
          client={client} />
        </Sidebar>

        <Emails 
          goBack={this.props.history.goBack} 
          client={client} />
      </div>
    );
  }
}

function getClient(clients, id) {
  return clients.find(client => client.id === id)
}

const WithStyles = withStyles(styles)(ClientPage);
const WithConnect = connect(({clients, sidebar}, {match: {params: {id}}}) => {
  return {client: getClient(clients, id), sidebar}
}, {selectClient})(WithStyles)
export default WithConnect
