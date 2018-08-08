
exports.up = function (knex, Promise) {
  return knex.schema.createTable('events', (table) => {
    table.increments('id').primary()
    table.string('eventName').notNullable()
    table.text('eventDescription').notNullable()
    table.text('eventImage')
    table.text('eventWebsite')
    table.integer('eventPrice').notNullable()
    table.string('eventCity').references('cities.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('events')
}
