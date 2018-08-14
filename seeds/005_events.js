
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          id: 1,
          eventName: 'SF MOMA',
          eventImage: "https://pro2-bar-s3-cdn-cf2.myportfolio.com/0d43e34c35f934e74f5c1a4d3fd22d24/3867f677-167c-4f1b-b14f-b4277c897e81_rw_1920.jpg?h=faa44cb37369eec6955bac2499c7d3a8",
          eventWebsite: 'https://www.sfmoma.org/',
          eventDescription: 'The San Francisco Museum of Modern Art is a modern art museum located in San Francisco, California. A nonprofit organization, SFMOMA holds an internationally recognized collection of modern and contemporary',
          eventPrice: 25,
          eventCity: "San Francisco"
        }, {
          id: 2,
          eventName: 'Cal Academy',
          eventImage: "https://www.fostertravel.com/wp-content/uploads/2014/12/san-francisco-golden-gate-park-de-young-museum-california108508-1920.jpg",
          eventWebsite: 'https://www.calacademy.org/',
          eventDescription: 'The California Academy of Sciences is a research institute and natural history museum in San Francisco, California, that is among the largest museums of natural history in the world, housing over 26 million specimens.',
          eventPrice: 40,
          eventCity: "San Francisco"
        }, {
          id: 3,
          eventName: 'Cars and Coffee',
          eventImage: "http://ajeclassics.co.uk/wp-content/uploads/2016/03/Jag-129.jpg",
          eventWebsite: 'https://www.eventbrite.com/e/cars-and-coffee-la-tickets-34210770335',
          eventDescription: 'PLEASE JOIN US FOR A LITTLE COFFEE AND A LOT OF AMAZING AUTOMOBILES.',
          eventPrice: 5,
          eventCity: "Los Angeles"
        }, {
          id: 4,
          eventName: 'Alamo Square',
          eventImage: "http://cdn.playbuzz.com/cdn/793fed2f-25c3-4fa3-8365-567b85c47633/34048eee-b35d-4947-864d-a2b67bd4249f.jpg",
          eventWebsite: 'http://sfrecpark.org/destination/alamo-square/',
          eventDescription: 'Alamo Square is a residential neighborhood and park in San Francisco, California, in the Western Addition',
          eventPrice: 0,
          eventCity: "San Francisco"
        }, {
          id: 5,
          eventName: 'Marin Headlands',
          eventImage: "https://cdn-images-1.medium.com/max/1920/1*Hfq9jmp74m_YeDiOqVLwnw.jpeg",
          eventWebsite: 'https://www.nps.gov/goga/marin-headlands.htm',
          eventDescription: 'The Marin Headlands houses an amazing richness of history and biological diversity due to the variety of habitats and unique geology',
          eventPrice: 10,
          eventCity: "San Francisco"
        }, {
          id: 6,
          eventName: 'Brooklyn Bridge',
          eventImage: "https://www.digitalphotomentor.com/photography/2015/05/wide-angle-lenses-750px-01.jpg",
          eventWebsite: 'https://www.brooklynbridgepark.org/',
          eventDescription: 'The Brooklyn Bridge is a hybrid cable-stayed/suspension bridge in New York City and is one of the oldest roadway bridges in the United States.',
          eventPrice: 0,
          eventCity: "New York City"
        }, {
          id: 7,
          eventName: 'Conservatory of Flowers',
          eventImage: "https://conservatoryofflowers.org/DEV2017/wp-content/uploads/2017/01/SteveCowellPhotography.jpg",
          eventWebsite: 'https://conservatoryofflowers.org/',
          eventDescription: 'Golden Gate Parks Victorian-era glass greenhouse has more than 2,000 species of plants & flowers.',
          eventPrice: 9,
          eventCity: "San Francisco"
        }, {
          id: 8,
          eventName: 'Malibu Wine Safari',
          eventImage: "http://www.mainstreettours.com/Main/Images/GfxPkg/giraffe.jpg",
          eventWebsite: 'https://www.lasafaris.com/',
          eventDescription: 'Explore the 1,000 acre Saddlerock Ranch and vineyard in Malibu. Your trusty guide and driver team will lead the adventure on custom-built open-air Safari vehicles. ',
          eventPrice: 95,
          eventCity: "Los Angeles"
        }, {
          id: 9,
          eventName: 'Mr. Holmes Bake House',
          eventImage: "https://cdn.vox-cdn.com/thumbor/1lq1B5ggpolYuUKT3NxLXYVzyOM=/0x0:2000x1333/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/57016907/MrHolmesCruffin_PChang_1368.0.0.jpg",
          eventWebsite: 'http://mrholmesbakehouse.com/',
          eventDescription: 'Bakery serving a mix of tarts, donuts & croissant-muffins, plus coffee in a cozy, bright space.',
          eventPrice: 6,
          eventCity: "San Francisco"
        }, {
          id: 10,
          eventName: 'Brooklyn Barge',
          eventImage: "https://idktonight.com/wp-content/uploads/2018/05/The-Brooklyn-Barge.jpg",
          eventWebsite: 'https://www.thebrooklynbarge.com/',
          eventDescription: 'Hip waterfront gastropub featuring American plates & cocktails, plus a patio with skyline views.',
          eventPrice: 75,
          eventCity: "New York City"
        }, {
          id: 11,
          eventName: 'Huntington Tea Garden',
          eventImage: "https://cdn.theculturetrip.com/wp-content/uploads/2017/08/feature-3.jpg",
          eventWebsite: 'http://huntington.org/',
          eventDescription: 'The Huntington Library, Art Collections and Botanical Gardens is a collections-based educational and research institution established by Henry E. Huntington and located in Los Angeles County in San Marino, California',
          eventPrice: 27,
          eventCity: "Los Angeles"
        }, {
          id: 12,
          eventName: 'Museum of Ice Cream',
          eventImage: "https://images1.laweekly.com/imager/u/original/8152886/ice-cream-museum-sprinkles-los-angeles.jpg",
          eventWebsite: 'https://www.museumoficecream.com/san-francisco/',
          eventDescription: 'A WILD IMAGINATION, CHASING YOUR DREAMS, HAVING FUN, TOGETHERNESS, SHARING SWEETS & TREATING YOUR TASTEBUDS',
          eventPrice: 38,
          eventCity: "San Francisco"
        }, {
          id: 13,
          eventName: 'vida verde nyc',
          eventImage: "https://cdn.newsday.com/polopoly_fs/1.19229884.1529091270!/httpImage/image.png_gen/derivatives/display_960/image.png",
          eventWebsite: 'https://vidaverdeny.com/',
          eventDescription: 'eat at a trendy restaurant',
          eventPrice: 75,
          eventCity: "New York City"
        }, {
          id: 14,
          eventName: 'Natural Pools',
          eventImage: "https://i.ytimg.com/vi/PFMDNfYLd3g/maxresdefault.jpg",
          eventWebsite: 'https://www.theoutbound.com/orange-county/swimming/a-day-at-the-thousand-steps-pools',
          eventDescription: 'A beautiful, sometimes secluded beach with two man made pools that collect saltwater during high tide and warm up during low tide. Unbelievable sunset views.',
          eventPrice: 0,
          eventCity: "Los Angeles"
        }, {
          id: 15,
          eventName: 'Moraga Tiled Steps',
          eventImage: "https://i.ytimg.com/vi/MFScvfgaJiM/maxresdefault.jpg",
          eventWebsite: 'http://www.16thavenuetiledsteps.com/',
          eventDescription: 'Creative, community-driven mosaic featuring a flowing sea to stars design up a 163-step stairway.',
          eventPrice: 0,
          eventCity: "San Francisco"
        }, {
          id: 16,
          eventName: 'Soho Grand Hotel',
          eventImage: "https://exp.cdn-hotels.com/hotels/1000000/50000/41200/41198/67599867_z.jpg",
          eventWebsite: 'https://www.sohogrand.com/',
          eventDescription: 'drink at a trendy hotel',
          eventPrice: 25,
          eventCity: "New York City"
        }, {
          id: 17,
          eventName: 'LACMA',
          eventImage: "https://www.pomona.edu/sites/default/files/styles/banner/public/images/articles/istock-589971260.jpg?itok=wJXUl8gp",
          eventWebsite: 'http://www.lacma.org/',
          eventDescription: 'Largest art museum in the West inspires creativity and dialogue.',
          eventPrice: 20,
          eventCity: "Los Angeles"
        }, {
          id: 18,
          eventName: 'Foreign Cinmea',
          eventImage: "https://cdn.vox-cdn.com/thumbor/qgSIyBQNWpLRGijDaEnE2n4QDWU=/0x0:1013x760/1200x900/filters:focal(0x0:1013x760)/cdn.vox-cdn.com/uploads/chorus_image/image/49708683/foreigncinmea_event.0.0.jpg",
          eventWebsite: 'http://foreigncinema.com/',
          eventDescription: 'Crowds eat Californian-Mediterranean fare (& a popular brunch) in an outdoor space screening films.',
          eventPrice: 40,
          eventCity: "San Francisco"
        }, {
          id: 19,
          eventName: 'Govern Island Camping',
          eventImage: "https://www.jetsetter.com/uploads/sites/7/2018/04/l5_ujn-i-1380x690.jpeg",
          eventWebsite: 'https://www.collectiveretreats.com/retreat/collective-governors-island/',
          eventDescription: 'A quick ferry ride from downtown Manhattan, this peaceful oasis is nestled near the hills of historic Governors Island. You’ll be surrounded by sprawling green space with unparalleled views of the Statue of Liberty across the New York Harbor. It’s a retreat unlike any other in the world.',
          eventPrice: 100,
          eventCity: "New York City"
        }, {
          id: 20,
          eventName: 'Venice Beach',
          eventImage: "https://c1.staticflickr.com/5/4226/34785712816_7b8c3467f5_b.jpg",
          eventWebsite: 'https://www.venicebeach.com/',
          eventDescription: 'Known for its bohemian spirit, Venice is a buzzing beach town with upscale commercial and residential pockets. Free-spirited Venice Boardwalk is the site of funky shops, street performers and colorful murals.',
          eventPrice: 0,
          eventCity: "Los Angeles"
        }, {
          id: 21,
          eventName: 'Castro',
          eventImage: "http://realestate-in-sanfrancisco.com/wp-content/uploads/2014/01/17566673695_e11ac5ec3d_b.jpg",
          eventWebsite: 'https://www.sfgate.com/neighborhoods/sf/castro/',
          eventDescription: 'The Castro District, in Eureka Valley, is synonymous with gay culture. Revelers often spill onto the sidewalks at numerous bars, like Twin Peaks Tavern, whose floor-to-ceiling windows were revolutionary when it opened in 1972. ',
          eventPrice: 0,
          eventCity: "San Francisco"
        }, {
          id: 22,
          eventName: 'AIRE Ancient Baths',
          eventImage: "https://www.cro-charter.com/wp-content/uploads/2017/01/bathroom-2460377_1920.jpg",
          eventWebsite: 'https://beaire.com/en/aire-ancient-baths-new-york/',
          eventDescription: 'In the midst of the bustle and fast-paced rhythm of downtown, right at the heart of TriBeCa, there is an oasis of tranquility exclusively designed to balance mind and body. Located at a restored historical building, originally an 1883 textile factory, the AIRE experience consists of an unforgettable journey through sensations across the various baths with water at different temperatures that will transport you to the ancient times of the Roman, Greek and Ottoman traditions.',
          eventPrice: 75,
          eventCity: "New York City"
        }, {
          id: 23,
          eventName: 'Malibu Farm',
          eventImage: "http://www.lido-hotel.net/wp-content/uploads/2014/10/Hotel-Lido-Restaurant-Beach-Water-View-Evening-Greece.jpg",
          eventWebsite: 'https://www.malibu-farm.com/',
          eventDescription: 'Breakfast-&-lunch spot offering locally sourced American cuisine & pierside Pacific views.',
          eventPrice: 30,
          eventCity: "Los Angeles"
        }, {
          id: 24,
          eventName: 'Tea at the Palace Hotel',
          eventImage: "https://www.worldtoursitaly.com/wp-content/uploads/2015/10/Napoli2-x-sito.jpg",
          eventWebsite: 'https://www.sfpalace.com/signature-tea-san-francisco/',
          eventDescription: 'Experience the elegance and tradition of Signature Tea in San Francisco at the historic Palace Hotel. Enjoy signature tea in our Garden Court, one of the most beautiful settings for dining and holiday events in San Francisco. ',
          eventPrice: 55,
          eventCity: "San Francisco"
        }, {
          id: 25,
          eventName: 'Whitney Museum',
          eventImage: "https://i.pinimg.com/originals/c7/00/38/c700387957010617cc21cc0079affee8.jpg",
          eventWebsite: 'https://whitney.org/',
          eventDescription: 'The Whitney Museum of American Art. Explore works, exhibitions, and events online. Located in New York City.',
          eventPrice: 30,
          eventCity: "New York City"
        }, {
          id: 26,
          eventName: 'Grand Central Market',
          eventImage: "http://www.comparestudio.com/wp-content/uploads/2016/12/Most-Populous-Cities.jpg",
          eventWebsite: 'http://www.grandcentralmarket.com/',
          eventDescription: 'Emporium hosting food vendors & florists, plus game nights, movies & other events, since 1917.',
          eventPrice: 0,
          eventCity: "Los Angeles"
        }, {
          id: 27,
          eventName: 'Alcatraz',
          eventImage: 'https://www.nationalparks.org/sites/default/files/Alcatraz_iStock_000012379929.jpg',
          eventWebsite: 'https://www.alcatrazcruises.com/',
          eventDescription: 'Experience the beauty, history and infamy of Alcatraz Island on San Francisco Bay. You will be astounded by what you see and learn.',
          eventPrice: 37,
          eventCity: "San Francisco"
        }, {
          id: 28,
          eventName: 'Bike SF',
          eventImage: 'https://s-media-cache-ak0.pinimg.com/originals/07/9c/29/079c298960c040e138bcd3a517099002.jpg',
          eventWebsite: 'https://www.blazingsaddles.com/san-francisco',
          eventDescription: 'Bike the Bridge! Our most popular route takes you along San Francisco’s stunning waterfront, across the Golden Gate Bridge and down to the picturesque seaside towns of Sausalito & Tiburon. Return via ferry!',
          eventPrice: 45,
          eventCity: "San Francisco"
        }, {
          id: 29,
          eventName: 'Pier 39 Aquarium',
          eventImage: 'http://bord-eaux.com/wp-content/uploads/2018/03/georgia-aquarium-whale-shark_9.jpg',
          eventWebsite: 'https://www.pier39.com/merchant/aquarium-of-the-bay/',
          eventDescription: 'Explore the magic, beauty and wonder of San Francisco Bay at Aquarium of the Bay. Located at the water’s edge, 20,000 local sea creatures await you.',
          eventPrice: 15,
          eventCity: "San Francisco"
        }, {
          id: 30,
          eventName: 'Statue of Liberty',
          eventImage: 'https://www.nationalparks.org/sites/default/files/shutterstock_56386615.jpg',
          eventWebsite: 'https://www.statueoflibertytickets.com/tickets/',
          eventDescription: 'Iconic National Monument opened in 1886, offering guided tours, a museum & city views.',
          eventPrice: 14,
          eventCity: "New York City"
        }, {
          id:31,
          eventName: 'Empire State Building',
          eventImage: 'https://wingsair.net/wp-content/uploads/2015/05/Manhattan-sunset.jpg',
          eventWebsite: 'http://www.esbnyc.com/',
          eventDescription: 'Iconic, art deco office tower from 1931 with exhibits & observatories on the 86th & 102nd floors.',
          eventPrice: 30,
          eventCity: "New York City"
        }, {
          id: 32,
          eventName: 'Museum of Modern Art',
          eventImage: 'http://assets.saatchiart.com/saatchi/1056993/art/4244559/3314407-KESXFDWW-8.jpg',
          eventWebsite: 'https://www.moma.org/tickets/select',
          eventDescription: 'Works from van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The Modern restaurant.',
          eventPrice: 45,
          eventCity: "New York City"
        }, {
          id: 33,
          eventName: 'Hike to the Hollywood Sign',
          eventImage: 'https://i.pinimg.com/originals/fa/cd/30/facd3096ae5f9527e5ac228644e90607.jpg',
          eventWebsite: 'https://hollywoodsign.org/',
          eventDescription: "It's more than just nine white letters spelling out a city's name; it's one of the world's most evocative symbols – a universal metaphor for ambition, success, glamour...for this dazzling place, industry and dream we call H-O-L-L-Y-W-O-O-D",
          eventPrice: 0,
          eventCity: "Los Angeles"
        }, {
          id: 34,
          eventName: 'Griffith Observatory',
          eventImage: 'https://oligibbs.com/photos/images/2015-10-29-1446097500.jpg',
          eventWebsite: 'http://griffithobservatory.org/visiting/admission.html',
          eventDescription: 'The vista from this hilltop landmark is stunning, particularly at night when Los Angeles twinkles below. Inside you’ll find a bevy of exhibits, including a Foucault pendulum, Tesla coil and planetarium show',
          eventPrice: 30,
          eventCity: "San Francisco"
        }, {
          id: 35,
          eventName: 'Santa Monica Pier',
          eventImage: 'http://assets.saatchiart.com/saatchi/675832/art/2040379/1152786-KIKVTKMS-8.jpg',
          eventWebsite: 'https://santamonicapier.org/',
          eventDescription: 'Considered the focal point of Santa Monica Beach, Santa Monica Pier includes a Ferris wheel, aquarium, fairground games and cotton candy stands.',
          eventPrice: 0,
          eventCity: "Los Angeles"
        }, {
          id: 36,
          eventName: 'Woodworking Class',
          eventImage: 'http://archinspire.pro/wp-content/uploads/2016/05/7-tattoo-shop-design-workshop-interior-design-inspiration.jpg',
          eventWebsite: 'https://coursehorse.com/nyc/classes/art/woodworking',
          eventDescription: 'Find and compare thousands of woodworking classes in NYC, New York. ... little to no woodworking experience, this five-session class covers wood physics, shop safety and etiquette, ... The key premise is learning through making and testing.',
          eventPrice: 155,
          eventCity: "New York City"
        }, {
          id: 37,
          eventName: 'Cocktail Making Class',
          eventImage: 'http://cocinillas.elespanol.com/wp-content/uploads/2014/05/cocteles1.jpg',
          eventWebsite: 'https://www.eventbrite.com/d/ny--new-york/cocktail-class/?page=1',
          eventDescription: 'Come make creative cocktails and socialize.',
          eventPrice: 55,
          eventCity: "New York City"
        }, {
          id: 38,
          eventName: 'Comedy Night',
          eventImage: "https://dkemhji6i1k0x.cloudfront.net/000_clients/633491/page/633491yXGi6YAD.jpg",
          eventWebsite: 'https://www.google.com/',
          eventDescription: 'Catch your favorite standup comedians in action at the Laugh Factory Club in Hollywood. Find details for all the upcoming shows, comedians and tickets',
          eventPrice: 42,
          eventCity: "Los Angeles"
        }, {
          id: 39,
          eventName: 'Dim Sum',
          eventImage: "https://s-media-cache-ak0.pinimg.com/originals/67/d2/1d/67d21db567c06de2ca52e237d9a59510.jpg",
          eventWebsite: 'https://www.google.com/',
          eventDescription: 'Restaurants specializes in traditional and contemporary Dim Sum and is located in the heart of San Francisco',
          eventPrice: 35,
          eventCity: "San Francisco"
        }, {
          id: 40,
          eventName: 'architecture tour',
          eventImage: "https://mymodernmet.com/wp/wp-content/uploads/archive/urc75WrkGP9RkN0fhSgM_1082060712.jpeg",
          eventWebsite: 'https://www.google.com/',
          eventDescription: ' Los Angeles is a beacon for modern architecture and an ideal place to explore the work of innovative 20th-century home architects.',
          eventPrice: 40,
          eventCity: "Los Angeles"
        }
      ]);
    });
};
