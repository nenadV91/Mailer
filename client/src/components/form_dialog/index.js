import React, { Component } from 'react';
import {Dialog, DialogContent } from '@material-ui/core';
import {Tabs, Tab, AppBar} from '@material-ui/core';
import Form from './Form';
import LinkForm from './LinkForm';


class FormDialog extends Component {
  state = {
    active: 0
  }

  handleTabChange = (e, value) => {
    this.setState({active: value})
  }

  render() {
    let {active} = this.state;

    return (
      <div>
        <Dialog 
        fullWidth
        aria-labelledby="form-dialog-content"
        onClose={this.props.closeDialog}
        open={this.props.open}>
          <DialogContent id="form-dialog-content">
            <AppBar position="static">
              <Tabs fullWidth value={active} onChange={this.handleTabChange}>
                <Tab value={0} label="Insert manually" />
                <Tab value={1} label="Insert by link" />
              </Tabs>
            </AppBar>

            {active === 0 && <Form 
              loaders={this.props.loaders}
              closeDialog={this.props.closeDialog}
              addClient={this.props.addClient} />}

            {active === 1 && <LinkForm 
              loaders={this.props.loaders} />}
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default FormDialog
