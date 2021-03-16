'use strict';

const express = require('express'); //express server
const app = express(); 
const cors = require('cors'); //allow cors
const morgan = require('morgan'); //helps with middleware
require('./models/customer');
const mongoose = require('mongoose');
const Customer = mongoose.model('customer');


// middleware
const notFound = require('./error-handlers/404');
const serverError = require('./error-handlers/500');
const apiRoutes = require('./routes/apiRoutes.js');
const logger = require('./middleware/logger');

//app middleware
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());  //turns the req.body into json
app.use(express.urlencoded({extended: true}));

app.use('/customer', apiRoutes);  // all my routes
app.use(logger);   // console.log() routes and methods



//proof of life
app.get('/alive', callBackHandler);

function callBackHandler(req, res, next) {
  res.status(200).send('Hello World');
}


//error handlers
app.use('*', notFound); //404 not found if we don't hit our route
app.use(serverError); //500 error when something throws an error



module.exports = {
  server: app,
  start: PORT => {
    if (!PORT) { throw new Error('No PORT here'); }
    app.listen(PORT, () => {
      console.log(`super connected ${PORT}`);
    });
  },
};