const db = require('../../data/dbConfig.js');

module.exports = {
    add, find, findBy, findById,
};

function find() {
    return db('landowner').select('id', 'username', 'password');
}

function findBy(filter) {
    return db('landowner')  
    .where(filter);
}

function findById(id) {
    return db('landowner').where({ id }).first();
}

async function add(user) {
    const [id] = await db('landowner').insert(user);
    return findById(id);
}



