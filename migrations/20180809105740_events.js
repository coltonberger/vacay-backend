
exports.up = function (knex, Promise) {
  return knex.schema.createTable('events', (table) => {
    table.increments('id').primary()
    table.string('eventName').notNullable()
    table.text('eventImage').notNullable()
    table.text('eventWebsite')
    table.text('eventDescription').notNullable()
    table.integer('eventPrice').notNullable()
    table.integer('eventCity').references('locations.id')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('events')
}
