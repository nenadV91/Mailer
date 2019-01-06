import React, { Component } from 'react';
import {FormControl, TextField} from '@material-ui/core';
import {withStyles} from '@material-ui/core';
import styles from './Form.style';
import Controls from './Controls';


class LinkForm extends Component {
  state = {
    link: ""
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  clearForm = () => {
    this.setState({link: ""})
  }

  render() {
    let {classes, loaders} = this.props;
    let loading = loaders.addClient;

    return (
      <form className={classes.form} onSubmit={this.handleSubmit}>
        <FormControl className={classes.formControl} fullWidth>
          <TextField
          label="Link"
          disabled={loading}
          className={classes.textField}
          value={this.state.link}
          onChange={this.handleChange('link')}
          margin="normal" />
        </FormControl>

        <Controls 
        loading={loading}
        onClear={this.clearForm} />
      </form>
    );
  }
}

export default withStyles(styles)(LinkForm)
