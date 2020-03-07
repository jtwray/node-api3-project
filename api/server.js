const express = require('express')
const configMiddleware = require('./configMiddleware')
const server = express()
server.use(express.json())
configMiddleware(server)

const rvRouter = require('../api/rv/rv-router.js')
const rvAuth = require('../api/auth/auth-router-rv.js')
const landownerAuth = require('../api/auth/auth-router-lo.js')
// const landownerRouter = require('../api/landowner/landowner-router.js');
const listingRouter = require('../api/listing/listing-router.js')
const reserveRouter = require('../api/reservation/reservation-router.js')
server.use(express.json())
server.use('/api/rv', rvRouter)
server.use('/api/reserve', reserveRouter)
server.use('/api/listing', listingRouter)

server.use('/auth/landowner', landownerAuth)
server.use('/auth/rv', rvAuth)

server.get('/api', (req, res) => {
  res.json({page:`  

<meta property='og:description' content='NAME|RV camping Airbnb PITCH| 5th wheel Airbnb is a company that connects land owners and 5th wheel / RV owners. 🤝🏼'>
<meta property='og:image' content='https://imgur.com/hpzN3f8'>
<meta property='og:url' content='https://rventure.herokuapp.com/api'>
<og:title><h1>rVenture</h1></og:title>

<h2>https://rventure.herokuapp.com/  ✔ api status</h2>

<hr>

<h3>https://rventure.herokuapp.com/api/ endpoint documentation📃</h3>

<br>
<h4><code> POST--|https://rventure.herokuapp.com/auth/rv/register</code>🚎</h4>
<h4><code> POST--|https://rventure.herokuapp.com/auth/rv/login</code></h4>
<h4><code> POST--|https://rventure.herokuapp.com/auth/landowner/register</code></h4
<h4><code> POST--|https://rventure.herokuapp.com/auth/landowner/login</code></h4>
<hr>
<h4><code> POST--|https://rventure.herokuapp.com/api/listing</code></h4>
<h4><code> GET---|https://rventure.herokuapp.com/api/listing</code></h4>
<h4><code> GET---|https://rventure.herokuapp.com/api/listing/:id</code></h4>
<h4><code> PUT---|https://rventure.herokuapp.com/api/listing/:id</code></h4>
<h4><code>DELETE-|https://rventure.herokuapp.com/api/listing/:id</code></h4>
🚙
<hr/>
<h4><code> POST--|https://rventure.herokuapp.com/api/reserve</code></h4>
<h4><code> GET---|https://rventure.herokuapp.com/api/reserve</code></h4>
<h4><code> GET---|https://rventure.herokuapp.com/api/reserve/:id</code></h4>
<h4><code> PUT---|https://rventure.herokuapp.com/api/reserve/:id</code></h4>
<h4><code>DELETE-|https://rventure.herokuapp.com/api/reserve/:id</code></h4>

<blockquote class="imgur-embed-pub" lang="en" data-id="hpzN3f8"><a href="//imgur.com/hpzN3f8"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
<og:description>
<main>NAME|<br>
<code>RV camping Airbnb</code><br>
PITCH| <br>
<code>5th wheel Airbnb is a company that connects land owners and 5th wheel / RV owners. 
RV parks are often cramped and in many areas are booked months in advance. 📅 
🏕 Collectively, landowners hold vast swaths of unused land that could be earning them revenue. 
By using 5th wheel Airbnb, 
  - 💑  RV owners get access to use these previously unknown/unavailable sites, 🏞🚌
  - 💰 and Landowners get to cash-in on otherwise dormant or underutilized land</code></main></og:description>
<link rel="image_src" href='https://imgur.com/hpzN3f8'>
`})
})

server.get('/auth', (req, res) => {
  res.send({page:`   
<h1>rVenture</h1>

<h2>https://rventure.herokuapp.com/  ✔ api status</h2>

<hr>
<h3>https://rventure.herokuapp.com/auth 🔐  endpoint documentation📃</h3>
<br>
<h4><code> POST--|https://rventure.herokuapp.com/auth/rv/register</code>🚎</h4>
<h4><code> POST--|https://rventure.herokuapp.com/auth/rv/login</code></h4>
<h4><code> POST--|https://rventure.herokuapp.com/auth/landowner/register</code></h4
<h4><code> POST--|https://rventure.herokuapp.com/auth/landowner/login</code></h4>
<hr> 🚙`})
})

server.get('/', (req, res) => {
  console.log('api:uppp')
  res.send(`  

  <title><h1>rVenture</h1></title>
    <h2>its up amigo</h2><br>
    <h2>https://rventure.herokuapp.com/      ✔   api status</h2>
    <h3>https://rventure.herokuapp.com/api/  🚎  endpoint documentation</h3>
    <hr>
    <h3>https://rventure.herokuapp.com/auth/ 🔐  endpoint documentation</h3>
    `)
})

module.exports = server
