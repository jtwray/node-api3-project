exports.up = function (knex) {
    return knex.schema
        .createTable('rv', rv => {
            rv
                .increments();
            rv
                .string('username', 255)
                .notNullable()
                .unique();
            rv
                .string('email', 255)
                .notNullable()
                .unique();
            rv.string('password', 255).notNullable();
        })

        .createTable('landOwner', landOwner => {
            landOwner
                .increments();
            landOwner
                .string('username', 255)
                .notNullable()
                .unique();
            landOwner
                .string('email', 255)
                .notNullable()
                .unique();
            landOwner.string('password', 255).notNullable();
        });
};


exports.down = function (knex) {
    return knex.schema.dropTableIfExists('landOwner').dropTableIfExists('rv');

};
