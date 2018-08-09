
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, firstName: 'colton', lastName: 'berger', email: 'coltonberger@gmail.com', password:'123456789'},
        {id: 2, firstName: 'max', lastName: 'berger', email: 'maxberger@gmail.com', password:'123456789'},
        {id: 3, firstName: 'joey', lastName: 'berger', email: 'joeyberger@gmail.com', password:'123456789'}
      ]);
    });
};
