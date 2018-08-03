const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, firstName: 'colton',lastName: 'berger', email: 'colton@gmail.com', password: bcrypt.hashSync('1234')},
        {id: 2, firstName: 'max', lastName: 'berger', email: 'max@gmail.com', password: bcrypt.hashSync('5678')},
        {id: 3, firstName: 'joey', lastName: 'berger', email: 'joey@gmail.com', password: bcrypt.hashSync('1234')}
      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      )
    })
};
