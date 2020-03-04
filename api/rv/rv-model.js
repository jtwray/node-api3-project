const db = require('../../data/dbConfig.js')

module.exports = {
  add, find, findBy, findById
}

function find () {
  return db('rv').select('id', 'username', 'password')
}

function findBy (filter) {
  return db('rv')
    .where(filter)
}

function findById (id) {
  return db('rv').where({ id }).first()
}

async function add (user) {
  const [id] = await db('rv').insert(user)
  return findById(id)
}
