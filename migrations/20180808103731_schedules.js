
exports.up = function (knex, Promise) {
  return knex.schema.createTable('schedules', (table) => {
    table.increments('id').primary()
    table.integer('userId').references('users.id').onDelete('CASCADE');
    table.integer('eventId').references('events.id').onDelete('CASCADE');
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('schedules')
}
