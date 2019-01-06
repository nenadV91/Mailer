import React, { Component } from 'react';
import {withStyles} from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';
import {connect} from 'react-redux';
import styles from './index.style';
import Sidebar from 'components/sidebar';
import Preview from './preview/Preview';
import Form from './form/Form';
import {unselectClient, sendEmail} from 'redux/actions';

import initial from 'templates/initial';
import contact from 'templates/contact';
import followup from 'templates/followup';


const templates = {
  initial,
  contact,
  followup
}

const initial_state = {
  templateName: "initial",
  template: initial,
  fields: {}
}

class EmailPage extends Component {
  state = {
    ...initial_state
  }

  changeTemplate = ({target: {value}}) => {
    const template = templates[value];
    const templateName = value;

    if(template && value !== "initial") {
      let fields = this.getFields(template.fields)
      this.setState({
        templateName,
        template,
        fields
      })
    } else if (value === "initial") {
      this.setState({
        ...initial_state
      })
    }
  }

  toHtml = () => {
    let {template, fields} = this.state;
    let html = template.html(fields);
    return html;
  }

  getFields = fields => {
    return fields.reduce((r, field) => {
      return Object.assign(r, {[field.slug]: field.default})
    }, {})
  }

  handleFieldChange = ({target: {name, value}}) => {
    this.setState((state) => ({
      ...state,
      fields: {
        ...state.fields,
        [name]: value
      }
    }))
  }

  render() {
    let {classes} = this.props;

    return (
      <div className={classes.root}>
        <Sidebar isOpen={this.props.sidebar}>
          <Scrollbars autoHide style={{height: '100%'}}>
            <Form
            toHtml={this.toHtml}
            fields={this.state.fields}
            history={this.props.history}
            template={this.state.template}
            selected={this.props.selected}
            sendEmail={this.props.sendEmail}
            changeTemplate={this.changeTemplate}
            templateName={this.state.templateName}
            loading={this.props.loaders.emailForm}
            handleFieldChange={this.handleFieldChange}
            unselectClient={this.props.unselectClient} />
          </Scrollbars>
        </Sidebar>

        <Preview
        template={this.state.template}
        fields={this.state.fields} />
      </div>
    );
  }
}

const WithStyles = withStyles(styles)(EmailPage);
const WithConnect = connect(({selected, loaders, sidebar}) => {
  return {selected, loaders, sidebar}
}, {
  unselectClient,
  sendEmail
})(WithStyles)
export default WithConnect