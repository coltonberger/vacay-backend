
exports.up = function (knex, Promise) {
  return knex.schema.createTable('schedules', (table) => {
    table.increments().primary()
    table.text('eventImage')
    table.string('eventName')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('schedules')
}
