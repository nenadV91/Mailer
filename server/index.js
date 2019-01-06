const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const emailRoutes = require('./routes/email');
const clientRoutes = require('./routes/client');


const app = express();
dotenv.config();


const {
  DB_HOST,
  DB_NAME,
  NODE_ENV
} = process.env;


const mongoURI = `mongodb://${DB_HOST}/${DB_NAME}`;
mongoose.connect(mongoURI, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', error => console.log(error));
mongoose.connection.once('open', () => console.log("Connected to mongo server."))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/email', emailRoutes);
app.use('/client', clientRoutes);


const port = process.env.PORT || 4000;
app.listen(port, () => console.log('Server is running.'));