
exports.up = function (knex, Promise) {
  return knex.schema.createTable('savedEvents', (table) => {
    table.increments('id').primary()
    table.integer('schedules_id').references('schedules.id')
    table.integer('events_id').references('events.id')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('savedEvents')
}
