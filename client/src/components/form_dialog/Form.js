import React, { Component } from 'react';
import {withStyles} from '@material-ui/core';
import {TextField, FormControl} from '@material-ui/core';
import { withSnackbar } from 'notistack';
import styles from './Form.style';
import Controls from './Controls';

const initial = {
  name: "",
  email: "",
  website: "",
  source: "",
  field: "",
  rating: 1
}

class Form extends Component {
  state = {
    ...initial
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addClient(this.state)
      .then(res => {
        const msg = `New client added.`
        const options = {variant: 'success'}
        this.setState({...initial})
        this.props.closeDialog()
        this.props.enqueueSnackbar(msg, options)
      }).catch(err => {
        const msg = err.message
        const options = {variant: 'error'}
        this.props.enqueueSnackbar(msg, options)
      })
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  clearForm = () => {
    this.setState({...initial})
  }

  render() {
    let {classes, loaders} = this.props;
    let loading = loaders.addClient;  

    return (
      <form onSubmit={this.handleSubmit} className={classes.form}>
        <FormControl className={classes.formControl} fullWidth>
          <TextField
          label="Name"
          disabled={loading}
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal" />
        </FormControl>

        <FormControl className={classes.formControl} fullWidth>
          <TextField
          label="Email"
          disabled={loading}
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal" />
        </FormControl>

        <FormControl className={classes.formControl} fullWidth>
          <TextField
          label="Website"
          disabled={loading}
          className={classes.textField}
          value={this.state.website}
          onChange={this.handleChange('website')}
          margin="normal" />
        </FormControl>

        <FormControl className={classes.formControl} fullWidth>
          <TextField
          label="Field"
          disabled={loading}
          className={classes.textField}
          value={this.state.field}
          onChange={this.handleChange('field')}
          margin="normal" />
        </FormControl>

        <FormControl className={classes.formControl} fullWidth>
          <TextField
          label="Source"
          disabled={loading}
          className={classes.textField}
          value={this.state.source}
          onChange={this.handleChange('source')}
          margin="normal" />
        </FormControl>

        <FormControl className={classes.formControl} fullWidth>
          <TextField
          label="Rating"
          type="number"
          disabled={loading}
          InputProps={{ inputProps: { min: 1, max: 3 } }}
          className={classes.textField}
          value={this.state.rating}
          onChange={this.handleChange('rating')}
          margin="normal" />
        </FormControl>

        <Controls 
        loading={loading}
        onClear={this.clearForm} />
      </form>
    );
  }
}

const WithSnackbar = withSnackbar(Form)
const WithStyles = withStyles(styles)(WithSnackbar);
export default WithStyles;
