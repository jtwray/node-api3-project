exports.up = function (knex) {
  return knex.schema
    .createTable('rv', tbl => {
      tbl
        .increments()
      tbl
        .string('username', 255)
        .notNullable()
        .unique()
      tbl
        .string('email', 255)
        .notNullable()
        .unique()
      tbl.string('password', 255).notNullable()
    })

    .createTable('landOwner', tbl => {
      tbl
        .increments()
      tbl
        .string('username', 255)
        .notNullable()
        .unique()
      tbl
        .string('email', 255)
        .notNullable()
        .unique()
      tbl
        .string('password', 255)
        .notNullable()
      tbl
        .string('contact', 255)
        .notNullable()
    })
    .createTable('listing', tbl => {
      tbl
        .increments()
      tbl
        .string('description', 255)
        .notNullable()
      tbl
        .integer('price', 255)
        .unsigned()
        .notNullable()
      tbl
        .string('photo', 255)
      tbl
        .string('amenities', 255)
      tbl
        .integer('landowner_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('landowner')
    })
    .createTable('reservation', tbl => {
      tbl
        .integer('rvowner_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('rv')
      tbl
        .integer('listing_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('listing')
      tbl
        .string('date', 255)
        .notNullable()
      tbl
        .primary(['rvowner_id', 'listing_id', 'date'])
    })
    .createTable('landowner_listing', tbl => {
      tbl
        .integer('landowner_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('landowner')
      tbl
        .integer('listing_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('listing')
      tbl
        .primary(['landowner_id', 'listing_id'])
    })
    .createTable('rvownerfav_listing', tbl => {
      tbl
        .integer('rvowner_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('rv')
      tbl
        .integer('listing_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('listing')
      tbl
        .primary(['rvowner_id', 'listing_id'])
    })
}
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('rvownerfav_listing')
    .dropTableIfExists('landowner_listing')
    .dropTableIfExists('reservation')
    .dropTableIfExists('listing')
    .dropTableIfExists('landowner')
    .dropTableIfExists('rv')
}
