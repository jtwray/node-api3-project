const db = require('../../database/dbConfig.js');

module.exports = {
    add, find, findBy, findById,
};

function find() {
    return db('landOwner').select('id', 'username', 'password');
}

function findBy(filter) {
    return db('landOwner')  
    .where(filter);
}

function findById(id) {
    return db('landOwner').where({ id }).first();
}

async function add(user) {
    const [id] = await db('landOwner').insert(user);
    return findById(id);
}



