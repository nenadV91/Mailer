import React, { Component } from 'react';
import {AppBar, Toolbar, Typography, Tabs, Tab} from '@material-ui/core';
import {Link, withRouter} from 'react-router-dom';
import {Button, IconButton} from '@material-ui/core';
import {withStyles} from '@material-ui/core';
import styles from './index.style';
import {
  Menu as MenuIcon
} from '@material-ui/icons';

class MyNavbar extends Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value });
  }

  handleClick = () => {
    this.props.openDialog();
  }

  render() {
    let {classes, location} = this.props;
    let active = this.state.value;

    if(location.pathname !== active) {
      active = location.pathname
    }

    if(active === '/') {
      active = '/clients'
    }

    if(active.includes('/clients')) {
      active = '/clients'
    }

    return (
      <AppBar position="fixed" className={classes.root} color="default">
        <Toolbar variant="dense">
          <IconButton 
          className={classes.toggleSidebar}
          onClick={this.props.toggleSidebar}>
            <MenuIcon />
          </IconButton>

          <Link to="/clients">
            <Typography 
            className={classes.logo} 
            variant="h6" 
            color="inherit">
            Mailer</Typography>
          </Link>

          <Tabs 
          onChange={this.handleChange}
          className={classes.menu}
          value={active}
          indicatorColor="primary"
          textColor="primary" >
            <Tab value="/emails/create" component={Link} label="Create email"  to="/emails/create"/>
            <Tab value="/clients" component={Link} label="Clients"  to="/clients"/>
          </Tabs>

          <Button 
          size="small"
          color="primary" 
          className={classes.button}
          onClick={this.handleClick}
          variant="contained">Add client</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

const WithStyles = withStyles(styles)(MyNavbar)
const WithRouter = withRouter(WithStyles);
export default WithRouter