import React, { Component } from 'react';
import styles from './Form.style';
import {withSnackbar} from 'notistack';
import {withStyles} from '@material-ui/core';
import UserDetailsPreview from './panels/UserDetailsPreview';
import FormDetailsPanel from './panels/FormDetailsPanel';
import MailFieldsPanel from './panels/MailFieldsPanel';
import ClientDetailsPanel from './panels/ClientDetailsPanel';


const initialFormDetails = {
  subject: ""
}


const initialClientDetails = {
  email: "",
  name: "",
  website: "",
  source: ""
}


const initial = {
  ...initialFormDetails,
  ...initialClientDetails
}


class Form extends Component {
  state = {
    expanded: "panel-1",
    errors: [],
    ...initial
  }

  componentDidUpdate = (nextProps) => {
    let template = this.props.templateName;
    let nextTemplate = nextProps.templateName;
    if(nextTemplate !== template) {
      this.setState({errors: this.updateErrors('template')})
    }
  }

  componentWillMount = () => {
    let {selected} = this.props;

    if(selected) {
      this.setState({
        ...selected,
        expanded: "panel-0",
        update: false
      })
    }
  }

  updateErrors = (field) => {
    let {errors} = this.state;
    if(!errors) return []
    return errors.filter(error => {
      return error.field !== field
    })
  }

  handlePanelChange = panel => (event, expanded) => {
    this.setState({expanded: expanded ? panel : false});
  }

  handleSelectChange = ({target: {name, value}}) => {
    this.setState({[name]: value});
  }

  handleTextChange = name => event => {
    this.setState({
      [name]: event.target.value,
      errors: this.updateErrors(name)
    });
  }

  handleSwitchChange = name => event => {
    this.setState({ [name]: event.target.checked });
  }

  handleRemove = () => {
    let {subject} = this.state;
    let reset = this.resetState();
    this.setState({...reset, expanded: "panel-1", subject});
    this.props.unselectClient();
  }

  resetState = () => {
    let state = {...this.state}
    for(var p in state) state[p] = "";
    return state;
  }

  throwError = (errors, field, message) => {
    errors.push({field, message})
  }

  handleSubmit = event => {
    event.preventDefault();
    let {email, subject} = this.state;
    let {templateName} = this.props;
    let errors = []


    if(templateName === 'initial') {
      this.throwError(errors, 'template', 'Email template not selected!')
    }

    if(!subject) {
      this.throwError(errors, 'subject', 'Email subject not defined!')
    }

    if(!email) {
      this.throwError(errors, 'email', 'To parameter not defined!')
    }

    if(errors.length) {
      return this.setState({errors})
    }

    const data = this.state;
    data.html = this.props.toHtml()
    data.template = this.props.templateName;
    data.props = this.props.fields;

    this.props.sendEmail(data)
    .then(res => {
      const msg = `Email sent to ${res.email}`;
      const options = {variant: 'success'}
      this.props.enqueueSnackbar(msg, options)
      this.props.unselectClient();
      this.setState({...this.resetState()}, () => {
        return this.props.history.push('/clients')
      })
    }).catch(error => {
      const msg = error.message;
      const options = {variant: 'error'}
      this.props.enqueueSnackbar(msg, options)
    })
  }

  render() {
    let {
      expanded
    } = this.state;

    let {
      classes, 
      selected,
      loading,
      template,
      templateName
    } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        {/*SELECTED USER DETAILS*/}
        {selected && 
        <UserDetailsPreview
        state={this.state}
        expanded={expanded}
        classes={this.props.classes}
        handleRemove={this.handleRemove}
        handlePanelChange={this.handlePanelChange}
        handleSwitchChange={this.handleSwitchChange} />}


        {/*PANEL 1*/}
        <FormDetailsPanel
        handleTextChange={this.handleTextChange}
        handlePanelChange={this.handlePanelChange}
        changeTemplate={this.props.changeTemplate}
        templateName={templateName}
        template={template} 
        expanded={expanded}
        loading={loading}
        classes={classes}
        state={this.state}
        errors={this.state.errors} />
        
    
        {/*PANEL 2*/}
        <MailFieldsPanel
        classes={classes}
        template={template}
        loading={loading}
        expanded={expanded}
        fields={this.props.fields}
        handleFieldChange={this.props.handleFieldChange}
        handlePanelChange={this.handlePanelChange} />


        {/*PANEL 3*/}
        <ClientDetailsPanel
        handleTextChange={this.handleTextChange}
        handlePanelChange={this.handlePanelChange}
        state={this.state}
        expanded={expanded}
        classes={classes} />
      </form>
    );
  }
}


const WithSnackbar = withSnackbar(Form)
const WithStyles = withStyles(styles)(WithSnackbar)
export default WithStyles
