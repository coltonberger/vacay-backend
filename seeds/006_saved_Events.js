
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('saved_Events').del()
    .then(function () {
      // Inserts seed entries
      return knex('saved_Events').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
