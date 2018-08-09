
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('savedEvents').del()
    .then(function () {
      // Inserts seed entries
      return knex('savedEvents').insert([
        {id: 1, schedules_id: 1, events_id: 1},
        {id: 2, schedules_id: 2, events_id: 2},
        {id: 3, schedules_id: 3, events_id: 3}
      ]);
    });
};
