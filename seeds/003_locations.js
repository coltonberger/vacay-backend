
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, cityName: 'San Francisco'},
        {id: 2, cityName: 'New York'},
        {id: 3, cityName: 'Los Angeles'}
      ]);
    });
};
