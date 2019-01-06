const express = require('express')
const email = require('../controllers/email');
const router = express.Router();


router.post('/', async (req, res) => {
  try {
    const client = await email.sendEmail({req});
    const result = await client.populate('emails').execPopulate();
    res.send(result)
  } catch(error) {
    if(error.name === 'MongoError' && error.code === 11000) {
      let error = 'Client with the same email already exist.'
      res.status(500).send({message: error})
    }

    console.log(error)
  }
})


module.exports = router

