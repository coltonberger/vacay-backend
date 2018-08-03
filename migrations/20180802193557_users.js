
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments().primary();
    table.string('firstName').notNullable();
    table.string('lastName').notNullable();
    table.string('email').notNullable();
    table.text('password').notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
