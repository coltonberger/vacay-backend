
exports.up = function (knex, Promise) {
  return knex.schema.createTable('chosen_location', (table) => {
    table.increments('id').primary()
    table.integer('users_id').references('users.id')
    table.integer('locations_id').references('locations.id')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('chosen_location')
}
