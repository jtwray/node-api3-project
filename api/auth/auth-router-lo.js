
const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets')

const { add, findBy } = require('../landowner/landowner-model')

//  CREATE

router.post('/register/', (req, res) => {
  const landowner = req.body
  // console.log(req)
  const hash = bcrypt.hashSync(landowner.password, 10)
  landowner.password = hash

  add(landowner)
    .then(saved => {
      res.status(201).json(saved)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json(error)
    })
})

router.post('/login/', (req, res) => {
  const { username, password } = req.body

  findBy({ username })
    .first()
    .then(landowner => {
      if (landowner && bcrypt.compareSync(password, landowner.password)) {
        const token = genToken(landowner)
        res.status(200).json({
          message: `Welcome landowner ${landowner.username}!`,
          token: token
        })
      } else {
        res.status(401).json({ message: 'Invalid Credentials' })
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

function genToken (landowner) {
  const payload = {
    landownerid: landowner.id,
    username: landowner.username,
    roles: 'landowner'
  }
  const options = {
    expiresIn: '1d'
  }

  const token = jwt.sign(payload, secrets.jwtSecrets, options)
  return token
}

module.exports = router
