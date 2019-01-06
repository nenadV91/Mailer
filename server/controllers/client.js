const Client = require('../models/Client');


function get() {
  return Client.find({}).populate('emails').sort({"date_added": -1})
}


function create({req}) {
  const data = req.body;
  const client = new Client({
    name: data.name,
    email: data.email,
    website: data.website,
    source: data.source,
    field: data.field
  })

  return client.save()
}


function remove({req}) {
  const id = req.params.id;
  return Client.findByIdAndDelete(id);
}


function update({req}) {
  const id = req.params.id;
  const update = req.body;
  return Client.findByIdAndUpdate(id, update, {new: true})
}


module.exports = {
  create,
  get,
  remove,
  update
}