const db = require('../../data/dbConfig.js')



// 'landowner' & 'listing'

module.exports = {
  add,
  addlisting,
  addTask,
  find,
  findBy,
  findById,
  findOwnerListings,
  findListingBy,
  remove,
  update,
  updateListingById
}

function add (listing) {
  return db(listing)
    .insert(listing, 'id')
    .then(([id]) => {
      return findById(id)
    })
}
function addReserve (reserve) {
  return db('reservation')
    .insert(reserve, 'id')
    .then(([id]) => {return db('reservation')
    .where("id",id)
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

// array of all landowner
function find (prop) {
    let table = prop.toString()
  return db(table)
}

function findBy(prop,filter) {
   let table=prop.toString()
  return db(table)
    .where("id",filter)
}


function findById (id) {
  console.log(id)
  return db('listing')
    .where('id', id)
    .first()
}
function findListingBy(prop,filter){
    let table=prop.toString()
    return db('listing')
    .where("landower_id",filter)
}
function findOwnerListings (id) {
  return db('landowner')
    .join('landowner_listings', 'landowner.id', 'landowner_listings.landowner_id')
    .join('listing', 'listing.landowner_id', 'landowner_listings.landowner_id')
    .join('landowner', 'landowner_listings.landowner_id','')
    .select('listing.id', 'landowner.username', 'listing.price', 'listing.location','listing.amenities')
    .where('listing.landowner_id', id)
    .orderBy('tasks.id', 'asc')
}
function findReservationsByRv (id) {
  return db('tasks ')
    .join('landowner', 'landowner.id', 'tasks.landowner_id')
    .select('tasks.id', 'landowner.landowner_name', 'tasks.id', 'tasks.notes', 'tasks.description', 'tasks.completed')
    .where('tasks.landowner_id', id)
    .orderBy('tasks.id', 'asc')
}
function findReservationsByListing(id) {
  return db('tasks ')
    .join('landowner', 'landowner.id', 'tasks.landowner_id')
    .select('tasks.id', 'landowner.landowner_name', 'tasks.id', 'tasks.notes', 'tasks.description', 'tasks.completed')
    .where('tasks.landowner_id', id)
    .orderBy('tasks.id', 'asc')
}
function findReservationsByOwner(id) {
  return db('listing')
    .join('landowner', 'landowner.id', 'listing.landowner_id')
    .select('tasks.id', 'landowner.landowner_name', 'tasks.id', 'tasks.notes', 'tasks.description', 'tasks.completed')
    .where('tasks.landowner_id', id)
    .orderBy('tasks.id', 'asc')
}

function remove (prop,id) {
   let table=prop.toString();
  return db(table)
    .where("id",id)
    .del()
}

function update(id, changes) {
  return db('listing')
    .where({ id })
    .update(changes, '*');
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

// function update (id,changes) {
//   return 
//      db('listing')
//       .where("id",id)
//       .update(changes)
//       .then(() => findBy('listing',id))
// }
