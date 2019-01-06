const mongoose = require('mongoose');
const validator = require('validator');
const {Schema} = mongoose;
const {isEmail} = validator;

const ClientSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Please enter a valid email address.'],
    validate: [isEmail, 'Please enter a valid email address.'],
  },
  website: String,
  source: String,
  date_added: {
    type: Date,
    default: Date.now
  },
  date_contacted: Date,
  contacted: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    default: 1
  },
  field: String,
  emails: [{
    type: Schema.Types.ObjectId,
    ref: 'Email'
  }]
})

ClientSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

ClientSchema.set('toJSON', {
  virtuals: true
});

const Client = mongoose.model('Client', ClientSchema);
module.exports = Client;