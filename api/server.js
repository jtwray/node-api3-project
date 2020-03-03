const express = require('express');
const configMiddleware = require('./configMiddleware')

const server = express();
configMiddleware(server)

const rvRouter = require('../api/rv/rv-router.js');
const rvAuth = require('../api/auth/auth-router-rv.js');
const landOwnerAuth = require('../api/auth/auth-router-lo.js');
// const landOwnerRouter = require('../api/landOwner/landOwner-router.js');
const listingRouter = require('../api/listing/listing-router.js');
const reserveRouter = require('../api/reservation/reservation-router.js');

server.use('/api/rv', rvRouter);
server.use('/api/reserve', reserveRouter);
server.use('/api/listing', listingRouter);

server.use('/auth/landowner', landOwnerAuth);
server.use('/auth/rv', rvAuth);

server.get('/api', (req, res) => {
  res.send(`   
  
<h1>rVenture</h1>

<h2>https://rventure.herokuapp.com/  ✔ api status</h2>

<hr>
<h3>https://rventure.herokuapp.com/api/ endpoint documentation</h3>

<br>
<h4><code> POST--|https://rventure.herokuapp.com/auth/rv/register</code></h4>
<h4><code> POST--|https://rventure.herokuapp.com/auth/rv/login</code></h4>
<h4><code> POST--|https://rventure.herokuapp.com/auth/landowner/register</code></h4
<h4><code> POST--|https://rventure.herokuapp.com/auth/landowner/login</code></h4>
<hr>
<h4><code> GET---|https://rventure.herokuapp.com/api/listing</code></h4>
<h4><code> GET---|https://rventure.herokuapp.com/api/listing/:id</code></h4>
<h4><code> POST--|https://rventure.herokuapp.com/api/listing/:id</code></h4>
<h4><code>DELETE-|https://rventure.herokuapp.com/api/listing/:id</code></h4>
<hr/>
<h4><code> GET---|https://rventure.herokuapp.com/api/reserve</code></h4>
<h4><code> GET---|https://rventure.herokuapp.com/api/reserve/:id</code></h4>
<h4><code> POST--|https://rventure.herokuapp.com/api/reserve/:id</code></h4>
<h4><code>DELETE-|https://rventure.herokuapp.com/api/reserve/:id</code></h4>
`)
})

server.get('/auth', (req, res) => {
  res.send(`   
  
<h1>rVenture</h1>

<h2>https://rventure.herokuapp.com/  ✔ api status</h2>

<hr>
<h3>https://rventure.herokuapp.com/auth   endpoint documentation</h3>

<br>
<h4><code> POST--|https://rventure.herokuapp.com/auth/rv/register</code></h4>
<h4><code> POST--|https://rventure.herokuapp.com/auth/rv/login</code></h4>
<h4><code> POST--|https://rventure.herokuapp.com/auth/landowner/register</code></h4
<h4><code> POST--|https://rventure.herokuapp.com/auth/landowner/login</code></h4>
<hr> `)
})

server.get('/', (req, res) => {
  console.log('!awesome')
  res.send(`<h2>its up amigo</h2><br>
  <h2>https://rventure.herokuapp.com/  ✔ api status</h2>
  <h3>https://rventure.herokuapp.com/api/ endpoint documentation
  <hr>
  <h3>https://rventure.herokuapp.com/auth   endpoint documentation</h3></h3>`)
})

module.exports = server
