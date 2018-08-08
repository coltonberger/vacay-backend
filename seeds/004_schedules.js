
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schedules').del()
    .then(function () {
      // Inserts seed entries
      return knex('schedules').insert([
        {id: 1, userId: 1, eventId: 1},
        {id: 2, userId: 2, eventId: 2},
        {id: 3, userId: 3, eventId: 3}
      ]);
    });
};
