const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const logger = require('./logger-middleware')
const server=express()
module.exports = function (server) {
  server.use(helmet())
  server.use(morgan('dev'))
  server.use(cors())
  server.use(logger)
  server.use(express.json())
}
