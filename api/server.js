const express = require('express');

const logger = require('./logger-middleware.js');

const rvRouter = require('../api/rv/rv-router.js');
const rvAuth = require('../api/auth/auth-router-rv.js');
const landOwnerAuth = require('../api/auth/auth-router-lo.js');
// const landOwnerRouter = require('../api/landOwner/landOwner-router.js');
const listingRouter = require('../api/listing/listing-router.js');
const reserveRouter = require('../api/reservation/reservation-router.js');


const server = express();

server.use(logger);
server.use(express.json());


server.use('/api/rv', rvRouter);
server.use('/api/reserve', reserveRouter);
server.use('/auth/landowner', landOwnerAuth);
server.use('/auth/rv', rvAuth);
server.use('/api/listing', listingRouter);

server.get('/api', (req, res) => {
  res.send(`this is hardcoded data. you can get a single listing | all the listings | or get/delete a single listing by id
  
  herokuapp.com/   check api status
  herokuapp.com/api/ endpoint docs


  POST  |herokuapp.com/auth/rv/register
  POST  |herokuapp.com/auth/rv/login
  
  POST  |herokuapp.com/auth/landowner/register
  POST  |herokuapp.com/auth/landowner/login

  GET   |herokuapp.com/api/listing
  GET   |herokuapp.com/api/listing/:id
  POST  |herokuapp.com/api/listing/:id
  DELETE|herokuapp.com/api/listing/:id

  GET   |herokuapp.com/api/reserve
  GET   |herokuapp.com/api/reserve/:id
  POST  |herokuapp.com/api/reserve/:id
  DELETE|herokuapp.com/api/reserve/:id

  
  `)

})

server.get('/', (req, res) => {
  console.log("!awesome");
  res.send(`<h2>its up amigo</h2>`).then(_ => console.log("awesome possum¡"));
});

module.exports = server;
