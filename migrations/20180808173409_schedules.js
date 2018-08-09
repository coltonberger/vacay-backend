
exports.up = function (knex, Promise) {
  return knex.schema.createTable('schedules', (table) => {
    table.increments('id').primary()
    table.integer('users_id').references('users.id')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('schedules')
}
