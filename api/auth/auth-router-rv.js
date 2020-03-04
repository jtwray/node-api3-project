const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets')

const rv = require('../rv/rv-model')

// CREATE

router.post('/register/rv', (req, res) => {
  const rv = req.body
  // console.log(req)
  const hash = bcrypt.hashSync(rv.password, 7)
  rv.password = hash


  rv.add(rv)
    .then(saved => {
      const token = genToken(saved);
      res.status(201).json({ id: `${saved.id}`, username: `${saved.username}`, token: `${token} ` });
    })
    .catch(error => {
      res.status(500).json({ message: 'There was an error while trying to add the user to the database.', error: `---${error}---${console.error(error)}` });
    })
})

router.post('/login/rv', (req, res) => {
  const { username, password } = req.body

  rv.findBy({ username })
    .first()
    .then(rv => {
      if (rv && bcrypt.compareSync(password, rv.password)) {
        const token = genToken(rv)
        res.status(200).json({
          message: `Welcome rv ${rv.username}!`,
          token: token,
          username: username
        })
      } else {
        res.status(401).json({ message: 'Invalid Credentials' })
      }
    }).catch(error => { res.status(500).json(error); console.error(error) })
})

function genToken (rv) {
  const payload = {
    rvid: rv.id,
    username: rv.username,
    roles: 'rv'
  }
  const options = {
    expiresIn: '1d'
  }

  const token = jwt.sign(payload, secrets.jwtSecrets, options)
  return token
}

module.exports = router
