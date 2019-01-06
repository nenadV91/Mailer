import React, { Component } from 'react';
import {
  List,
  ListItem,
  withStyles,
  Button
} from '@material-ui/core';
import styles from './Details.style';
import {Link} from 'react-router-dom';


class Details extends Component {
  handleSelect = () => {
    this.props.selectClient(this.props.client)
    this.props.history.push('/emails/create')
  }

  render() {
    let {
      client,
      classes
    } = this.props;

    if(!client) {
      return <List className={classes.list}>
        <ListItem className={classes.item}>
          <div className={classes.label}>Client not found</div>
        </ListItem>
      </List>
    }

    return (
      <List className={classes.list}>
        <ListItem className={classes.item}>
          <div className={classes.label}>Name</div>
          <div className={`${classes.value} ${classes.name}`}>{client.name || 'No defined name'}</div>
        </ListItem>

        <ListItem className={classes.item}>
          <div className={classes.label}>Email</div>
          <div className={classes.value}>{client.email || 'No defined email'}</div>
        </ListItem>

        <ListItem className={classes.item}>
          <div className={classes.label}>Website</div>
          <div className={classes.value}>{client.website || 'No defined website'}</div>
        </ListItem>

        <ListItem className={classes.item}>
          <div className={classes.label}>Source</div>
          <div className={classes.value}>{client.source || 'No defined source'}</div>
        </ListItem>

        <ListItem className={classes.controls}>
          <Link to="/clients"><Button 
          variant="contained"
          size="small">
          Go back</Button></Link>
          
          <Button 
          size="small" 
          color="primary" 
          onClick={this.handleSelect}
          variant="contained">Send email</Button>
        </ListItem>
      </List>
    );
  }
}


export default withStyles(styles)(Details)
