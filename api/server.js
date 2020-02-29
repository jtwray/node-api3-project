const express = require('express');

const logger = require('./logger-middleware.js');

const rvRouter = require('../api/rv/rv-router.js');
// const landOwnerRouter = require('../api/landOwner/landOwner-router.js');
const listingRouter = require('../api/listing/listing-router.js');


const server = express();

server.use(logger);
server.use(express.json());


server.use('/api/rv', rvRouter);
// server.use('/api/landOwner', landOwnerRouter);
server.use('/api/listing', listingRouter);

server.get('/', (req, res) => {
  console.log("!awesome");
  res.send(`<h2>its up amigo</h2>`).then(_ => console.log("awesome possum¡"));
});

module.exports = server;
