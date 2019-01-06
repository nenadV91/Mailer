const _ = require('lodash')
const Client = require('../models/Client');
const Email = require('../models/Email');
const {Schema} = require('mongoose');


function sendEmail({req}) {
  const body = req.body;
  const {id, update} = body;
  const emailData = _.pick(body, ['email', 'subject', 'html', 'template', 'props']);
  const clientData = _.pick(body, ['email', 'name', 'website', 'source']);

  if(!emailData.email) {
    throw new Error('Email must be defined!')
  }

  if(!emailData.subject) {
    throw new Error('Subject must be defined!')
  }

  const email = new Email({
    subject: emailData.subject,
    to: emailData.email,
    template: emailData.template,
    props: emailData.props,
  });

  return email.send({
    html: emailData.html
  }).then(async email => {
    let client = null;
    let data = {contacted: true}

    if(id) {
      client = await Client.findById(id).exec();
      if(update) Object.assign(data, clientData);
      Object.assign(client, data);
    } else {
      Object.assign(data, clientData);
      client = new Client(data);
    }
    
    client.emails.push(email);
    return client.save();
  })
}


module.exports = {
  sendEmail
}