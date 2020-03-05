const db = require('../../data/dbConfig.js')



// 'landowner' & 'listing'

module.exports = {
  find,
  findBy,
  findById,
  findTasks,
  // findlandownerlisting,
  add,
  addlisting,
  addTask,
  update,
  updateListingById,
  remove
}

function findTasks (id) {
  return db('tasks ')
    .join('landowner', 'landowner.id', 'tasks.landowner_id')
    .select('tasks.id', 'landowner.landowner_name', 'tasks.id', 'tasks.notes', 'tasks.description', 'tasks.completed')
    .where('tasks.landowner_id', id)
    .orderBy('tasks.id', 'asc')
}
// array of all landowner
function find () {
  return db('landowner')
}

function findBy(prop,filter) {
   let table=prop.toString()
  return db(table)
    .where(filter)
}


function findById (id) {
  console.log(id)
  return db('landowner')
    .where('id', id)
    .first()
}


function add (landowner) {
  return db('landowner')
    .insert(landowner, 'id')
    .then(([id]) => {
      return findById(id)
    })
}

function addlisting (listing, landowner_id) {
  return db('listing')
    .insert({ ...listing, landowner_id })
    .then(([id]) => {
      return db('listing')
        .where({ id })
    })
}

function addTask (task, landowner_id) {
  return db('tasks')
    .insert({ ...task, landowner_id })
    .then(([id]) => {
      return db('tasks')
        .where({ id })
    })
}

function updateListingById(changes,id){
    console.log("id",id)
    let listID=Number(id);
    console.log("listID",listID)
    return findBy('listing',id).then((r)=>
    r.update(changes)
    )
    // .then(()=>findBy('listing',id))
}

function update(id, changes) {
  return db('listing')
    .where({ id })
    .update(changes, '*');
}
// function update (id,changes) {
//   return 
//      db('listing')
//       .where("id",id)
//       .update(changes)
//       .then(() => findBy('listing',id))
// }

function remove (id) {
  return db('landowner')
    .where("id",id)
    .del()
    .then(() => findById("id",id))
}