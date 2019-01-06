import React, {Component} from 'react'
import {
  Delete as DeleteIcon,
  MailOutline as MailIcon,
  MoreHoriz as OptionsIcon
} from '@material-ui/icons';

import {
  Menu,
  MenuItem,
  IconButton,
  ListItemText,
  ListItemIcon 
} from '@material-ui/core'
import {Link} from 'react-router-dom';


class Options extends Component {
  state = {
    anchorEl: null
  }

  handleMenuClose = () => {
    this.setState({anchorEl: null})
  }

  handleMenuClick = event => {
    this.setState({anchorEl: event.currentTarget })
  }

  handleDelete = () => {
    let {original, id} = this.props;
    const msg = `${original.name || original.email || 'Client'} removed from clients.`
    this.props.removeClient(id);
    this.handleMenuClose()
    this.props.enqueueSnackbar(msg)
  }

  render() {
    let {anchorEl} = this.state;
    let {classes, id} = this.props;

    return <div className="text-center">
      <IconButton 
      aria-haspopup="true"
      className={classes.iconButton}
      onClick={this.handleMenuClick}
      aria-owns={anchorEl ? `menu-${id}` : undefined}>
        <OptionsIcon className={`${classes.icon} ${classes.options}`} />
      </IconButton>

      <Menu
        id={`menu-${id}`}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={this.handleMenuClose} >
        <MenuItem onClick={this.handleDelete}>
          <ListItemIcon className={classes.itemIcon}>
            <DeleteIcon />
          </ListItemIcon>
          
          <ListItemText 
          className={classes.text} 
          primary="Remove client"
          inset />
        </MenuItem>
      </Menu>
    </div>
  }
}


export default ({
  classes,
  history,
  removeClient,
  selectClient,
  enqueueSnackbar
}) => [{
  Header: 'Name',
  accessor: 'name',
  Cell: ({value, original: {id}}) => {
    return  <Link to={`clients/${id}`}>{value}</Link>
  }
}, {
  Header: 'Email',
  accessor: 'email',
  width: 200,
}, {
  Header: 'Website',
  accessor: 'website',
  width: 200,
  Cell: props => <a href={props.value}>{props.value}</a>
}, {
  Header: 'Source',
  accessor: 'source',
}, {
  Header: 'Contacted',
  accessor: 'contacted',
  Cell: props =>  <div className="text-center">
  {props.value ? 
    <i className="fa fa-check text-green text-small" aria-hidden="true"></i> :
    <i className="fa fa-times text-red text-small" aria-hidden="true"></i>}
  </div>
}, {
  Header: 'Rating',
  accessor: 'rating',
  width: 50,
  Cell: props => <div className="text-center">
    <span>{props.value}</span>
  </div>
}, {
  Header: 'Field',
  accessor: 'field',
  Cell: props => <div className="text-center">
    <span>{props.value}</span>
  </div>
}, {
  Header: 'Email',
  width: 50,
  Cell: props => <div className="text-center">
    <IconButton
    onClick={() => {
      selectClient(props.original)
      history.push('/emails/create')
    }}
    className={classes.iconButton}>
      <MailIcon className={`${classes.icon} ${classes.options}`} />
    </IconButton>
  </div>
}, {
  Header: '',
  Cell: props => <Options 
  enqueueSnackbar={enqueueSnackbar}
  original={props.original}
  removeClient={removeClient}
  id={props.original.id} 
  classes={classes}  />
}]