
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cities').del()
    .then(function () {
      // Inserts seed entries
      return knex('cities').insert([
        {id: 1, city: 'San Francisco'},
        {id: 2, city: 'New York'},
        {id: 3, city: 'Los Angeles'}
      ]);
    });
};
