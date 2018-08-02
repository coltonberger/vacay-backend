
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          id: 1,
          eventName: 'Explore Alcatraz',
          eventDescription: 'Experience the beauty, history and infamy of Alcatraz Island on San Francisco Bay. You will be astounded by what you see and learn.',
          eventPrice: 50,
        }, {
          id: 2,
          eventName: 'Bike Golden Gate Bridge',
          eventDescription: 'Bike the Bridge! Our most popular route takes you along San Francisco’s stunning waterfront, across the Golden Gate Bridge and down to the picturesque seaside towns of Sausalito & Tiburon. Return via ferry!',
          eventPrice: 10,
        }, {
          id: 3,
          eventName: 'Pier 39 Aquarium',
          eventDescription: 'Explore the magic, beauty and wonder of San Francisco Bay at Aquarium of the Bay. Located at the water’s edge, 20,000 local sea creatures await you. ',
          eventPrice: 20,
        }
      ]);
    });
};
