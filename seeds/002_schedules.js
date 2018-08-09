
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schedules').del()
    .then(function () {
      // Inserts seed entries
      return knex('schedules').insert([
        {id: 1, users_id: 1},
        {id: 2, users_id: 2},
        {id: 3, users_id: 3}
      ]);
    });
};
