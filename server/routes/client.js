const express = require('express')
const client = require('../controllers/client');
const router = express.Router();


router.get('/', async (req, res) => {
  const clients = await client.get();
  res.send(clients);
})


router.post('/', async (req, res) => {
  try {
    const result = await client.create({req});
    res.send(result)
  } catch(error) {
    if(error.name === 'MongoError' && error.code === 11000) {
      let error = 'Client with the same email already exist.'
      res.status(500).send({message: error})
    }
  }
})


router.delete('/:id', async (req, res) => {
  await client.remove({req});
  res.send(req.params.id);
})


router.patch('/:id', async (req, res) => {
  const update = await client.update({req});
  res.send(update);
})


module.exports = router

