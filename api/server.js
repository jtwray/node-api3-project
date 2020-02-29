const express = require('express');

const logger = require('./logger-middleware.js');

const rvRouter = require('../api/rv/rv-router.js');
const rvAuth = require('../api/auth/auth-router-rv.js');
const landOwnerAuth = require('../api/auth/auth-router-lo.js');
// const landOwnerRouter = require('../api/landOwner/landOwner-router.js');
const listingRouter = require('../api/listing/listing-router.js');


const server = express();

server.use(logger);
server.use(express.json());


server.use('/api/rv', rvRouter);
server.use('/auth/landowner', landOwnerAuth);
server.use('/auth/rv', rvAuth);
server.use('/api/listing', listingRouter);

server.get('/api',(req,res)=>{
  res.send(`this is hardcoded data. you can get a single listing | all the listings | or get/delete a single listing by id
  
  herokuapp.com/   check api status
  herokuapp.com/api/ endpoint docs

  herokuapp.com/auth/rv  
  herokuapp.com/landOwner
  herokuapp.com/api/listing
  herokuapp.com/api/listing/:id
  herokuapp.com/api/listing/:id
  herokuapp.com/api/listing/:id
  
  `)

})

server.get('/', (req, res) => {
  console.log("!awesome");
  res.send(`<h2>its up amigo</h2>`).then(_ => console.log("awesome possum¡"));
});

module.exports = server;
