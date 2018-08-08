
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schedules').del()
    .then(function () {
      // Inserts seed entries
      return knex('schedules').insert([
        {id: 1, eventImage: 'http://via.placeholder.com/250/ffffff/000000', eventName: 'testing1'},
        {id: 2, eventImage: 'http://via.placeholder.com/250/ffffff/000000', eventName: 'testing2'},
        {id: 3, eventImage: 'http://via.placeholder.com/250/ffffff/000000', eventName: 'testing3'}
      ]);
    });
};
