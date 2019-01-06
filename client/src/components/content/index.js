import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Email from 'pages/email';
import Clients from 'pages/clients';
import Client from 'pages/client';

class Content extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Clients} />
        <Route path="/emails/create" component={Email} />
        <Route exact path="/clients" component={Clients} />
        <Route path="/clients/:id" component={Client} />
      </Switch>
    );
  }
}

export default Content
