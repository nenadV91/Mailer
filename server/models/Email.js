const mongoose = require('mongoose');
const validator = require('validator');
const {Schema} = mongoose;
const {isEmail} = validator;

const Mail = require('../services/Mail');
const config = require('../config');


const EmailSchema = new Schema({
  subject: {
    type: String,
    trim: true,
    required: [true, 'Please enter a subject of the email.'],
  },
  to: {
    type: String,
    trim: true,
    required: [true, 'Please enter a valid email address.'],
    validate: [isEmail, 'Please enter a valid email address.'],
    alias: 'email'
  },
  template: String,
  props: Object,
  date: {
    type: Date,
    default: Date.now
  }
})

EmailSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

EmailSchema.set('toJSON', {
  virtuals: true
});


EmailSchema.methods.send = function({html}) {
  const mail = new Mail(config.email);

  return mail.sendMail({
    to: this.to, 
    subject: this.subject,
    from: config.email.from,
    html: html, 
    text: 'Testing email'
  }).then(() => this.save())
}


const Email = mongoose.model('Email', EmailSchema);
module.exports = Email;