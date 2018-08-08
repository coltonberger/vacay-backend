
exports.up = function (knex, Promise) {
  return knex.schema.createTable('cities', (table) => {
    table.increments('id').primary()
    table.string('city').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cities')
}
