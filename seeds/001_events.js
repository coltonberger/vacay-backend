
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          id: 1,
          eventName: 'Explore Alcatraz',
          eventImage: 'https://www.nationalparks.org/sites/default/files/Alcatraz_iStock_000012379929.jpg',
          eventWebsite: 'https://www.alcatrazcruises.com/',
          eventDescription: 'Experience the beauty, history and infamy of Alcatraz Island on San Francisco Bay. You will be astounded by what you see and learn.',
          eventPrice: 37,
          eventCity: 'San Francisco'
        }, {
          id: 2,
          eventName: 'Bike Golden Gate Bridge',
          eventImage: 'https://baycitybike.com/wp-content/uploads/SOSF-FERRY-BUILDING-1.jpg',
          eventWebsite: 'https://www.blazingsaddles.com/san-francisco',
          eventDescription: 'Bike the Bridge! Our most popular route takes you along San Francisco’s stunning waterfront, across the Golden Gate Bridge and down to the picturesque seaside towns of Sausalito & Tiburon. Return via ferry!',
          eventPrice: 45,
          eventCity: 'San Francisco'
        }, {
          id: 3,
          eventName: 'Pier 39 Aquarium',
          eventImage: 'http://bord-eaux.com/wp-content/uploads/2018/03/georgia-aquarium-whale-shark_9.jpg',
          eventWebsite: 'https://www.pier39.com/merchant/aquarium-of-the-bay/',
          eventDescription: 'Explore the magic, beauty and wonder of San Francisco Bay at Aquarium of the Bay. Located at the water’s edge, 20,000 local sea creatures await you.',
          eventPrice: 15,
          eventCity: 'San Francisco'
        }, {
          id: 4,
          eventName: 'Statue of Liberty',
          eventImage: 'https://www.nationalparks.org/sites/default/files/shutterstock_56386615.jpg',
          eventWebsite: 'https://www.statueoflibertytickets.com/tickets/',
          eventDescription: 'Iconic National Monument opened in 1886, offering guided tours, a museum & city views.',
          eventPrice: 14,
          eventCity: 'New York'
        }, {
          id: 5,
          eventName: 'Empire State Building',
          eventImage: 'https://wingsair.net/wp-content/uploads/2015/05/Manhattan-sunset.jpg',
          eventWebsite: 'http://www.esbnyc.com/',
          eventDescription: 'Iconic, art deco office tower from 1931 with exhibits & observatories on the 86th & 102nd floors.',
          eventPrice: 30,
          eventCity: 'New York'
        }, {
          id: 6,
          eventName: 'Museum of Modern Art',
          eventImage: 'http://assets.saatchiart.com/saatchi/1056993/art/4244559/3314407-KESXFDWW-8.jpg',
          eventWebsite: 'https://www.moma.org/tickets/select',
          eventDescription: 'Works from van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The Modern restaurant.',
          eventPrice: 45,
          eventCity: 'New York'
        }, {
          id: 7,
          eventName: 'Hike to the Hollywood Sign',
          eventImage: 'https://i.pinimg.com/originals/fa/cd/30/facd3096ae5f9527e5ac228644e90607.jpg',
          eventWebsite: 'https://hollywoodsign.org/',
          eventDescription: "It's more than just nine white letters spelling out a city's name; it's one of the world's most evocative symbols – a universal metaphor for ambition, success, glamour...for this dazzling place, industry and dream we call H-O-L-L-Y-W-O-O-D",
          eventPrice: 0,
          eventCity: 'Los Angeles'
        }, {
          id: 8,
          eventName: 'Griffith Observatory',
          eventImage: 'https://oligibbs.com/photos/images/2015-10-29-1446097500.jpg',
          eventWebsite: 'http://griffithobservatory.org/visiting/admission.html',
          eventDescription: 'The vista from this hilltop landmark is stunning, particularly at night when Los Angeles twinkles below. Inside you’ll find a bevy of exhibits, including a Foucault pendulum, Tesla coil and planetarium show',
          eventPrice: 30,
          eventCity: 'Los Angeles'
        }, {
          id: 9,
          eventName: 'Santa Monica Pier',
          eventImage: 'http://assets.saatchiart.com/saatchi/675832/art/2040379/1152786-KIKVTKMS-8.jpg',
          eventWebsite: 'https://santamonicapier.org/',
          eventDescription: 'Considered the focal point of Santa Monica Beach, Santa Monica Pier includes a Ferris wheel, aquarium, fairground games and cotton candy stands.',
          eventPrice: 0,
          eventCity: 'Los Angeles'
        }
      ])
    })
}
