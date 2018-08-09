
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chosen_location').del()
    .then(function () {
      // Inserts seed entries
      return knex('chosen_location').insert([
        {id: 1, users_id: 1, locations_id: 1},
        {id: 2, users_id: 2, locations_id: 2},
        {id: 3, users_id: 3, locations_id: 3}
      ]);
    });
};
