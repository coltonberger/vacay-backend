
exports.up = function (knex, Promise) {
  return knex.schema.createTable('locations', (table) => {
    table.increments('id').primary()
    table.string('cityName').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('locations')
}
