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
<meta property='og:title' content='NODEjs|Express API for -- rVenture:the 5th wheel Airbnb -- a company that connects land owners and 5th wheel / RV owners."/>
<meta property='og:image' content='https://imgur.com/hpzN3f8"/>
<meta property='og:description' content='NODEjs|Express API for -- rVenture:the 5th wheel Airbnb --RV camping Airbnb
NAME
RV camping Airbnb
PITCH
5th wheel Airbnb is a company that connects land owners and 5th wheel / RV owners.  RV parks are often cramped and in many areas are booked months in advance. Collectively, landowners hold vast swaths of unused land that could be earning them revenue.  By using 5th wheel Airbnb, RV Owners get  access to use these previously unknown/unavailable sites, and Landowners get to cash in on otherwise dormant or underutilized land.
MVP
1. Users can register/create an account as either an **RV Owner** or a **Landowner** (web, mobile)
2. **Landowners** and **RV Owners** can login to the the app. (web, mobile)
3. **Landowners** can create, update and delete listings of their available land. At a minimum, a listing must include the land's location, description, price per day, and a photo. (web, mobile)
4. **RV Owners** can query/filter available listings by location (at a minimum) and reserve a spot for their RV for a desired date(s) (web, mobile)
STRETCH
1. Use MapKit (iOS) or MapView (Android) to render available sites on a map that **RV Owners** can click on to view the listings. (mobile)
2. **Landowners** and **RV Owners** can send messages to each other through the app. (web, mobile)
3. **Landowners** can specify *Available Dates* or *Blackout Dates* for each property listed. (web) 
	* **RV Owners** are only shown listings that are available on their desired date(s). (mobile)"/>
<meta property='og:url' content='https://rventure.herokuapp.com/api/ of the article" />
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
