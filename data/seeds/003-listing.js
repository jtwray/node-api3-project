
exports.seed = function (knex) {
  return knex('listing').insert(
    [{
      id: 1,
      landowner_id: 19,
      description: 'Enjoy the Camping and Outdoor Experience with the comforts of RV. Located in OK RV Full Hookup Park w/ Wifi & Cable. Gas Grill with Picnic Table and Firepit for Smores. Hard to cook those at hotels :-)',
      price: '$42.80',
      photo: 'https://imgur.com/qgRYDex',
      location: '89094',
      amenities: 'WiFi'
    }, {
      id: 2,
      landowner_id: 5,
      description: 'This pet friendly Airbnb rental in Anderson can comfortably accommodate 4 people in 1 bedroom and 2 bathrooms. There are 2 beds and guests will have access to the entire camper/rv during their stay.',
      price: '$224.39',
      photo: 'https://i.imgur.com/zmbaXFD.jpg',
      location: '3830-473',
      
      amenities: 'WiFi'
    }, {
      id: 3,
      landowner_id: 4,
      description: 
'Beautiful 34 Titanium Fifth Wheel completely renovated this spring. Everything is new.Comfort and luxury at your disposal. All you need is your suitcase! Young family and dogs are welcome!',
      price: '$276.82',
      photo: 'https://imgur.com/l94JiT9',
      location: '89094',
      amenities: 'water'
    }, {
      id: 4,
      landowner_id: 8,
      description: 'Large like new Denali Fifth Wheel. Trailer is parked next to our house in the RV parking area. Fully functional, gated, clean and comfortable at private residence. Within walking distance to some stores and across from walking, riding and jogging trail next to Fresno State Ag field. Close to Millerton Lake, Fresno State, Hospital, Movie Theatres, Tower District, Casinos, and much more! ONLY AUTHORIZED GUESTS ALLOWED ON PROPERTY OR IN FIFTH WHEEL.',
      price: '$43.86',
      photo: 'https://imgur.com/hCA9ZwX',
      location: '80560',
      amenities: 'electricity'
    }, {
      id: 5,
      landowner_id: 10,
      description: 'We bought these beautiful 11.5 acres in Tallahassee in 2017 and lived in this luxury 42 ft “glamper” while we built our very own tiny farmhouse! Now that the house is finished we offer the camper as a space for guests. Be close enough to town to attend all the fun events but have the option to feel totally removed from the city & enjoy every star in the night sky! We are a working farm & love sharing our little piece of heaven so come enjoy all that Currie Hill Farm and Tallahassee has to offer!',

      price: '$257.42',
      photo: 'https://imgur.com/pbUQXCF',
      location: '7604',
      amenities: 'restrooms'
    }, {
      id: 6,
      landowner_id: 10,
      description: '6 miles from the airport and 5 miles from the COTA track, this 43-acre property on Hwy 71 is close to everything but far enough away to relax quietly. Gate code access to the 42.5\' Fifth Wheel RV with 4 slides on a hill with downtown Austin views from the pool deck. Next to pool and hot tub, & near pond that is stocked with bass. Large tree swing makes it kid-friendly. DOG FRIENDLY!: shaded outdoor dog-kennel provided. Check out our other listing: https://airbnb.com/h/alpine',
      price: '$165.23',
      photo: 'https://i.imgur.com/W1HFYfS.jpg',
      location: '42082',
      amenities: 'WiFi'
    }, {
      id: 7,
      landowner_id: 5,
      description: 'Beautiful clean 2017 5th wheel with one bedroom and a full size pull out couch/ bed that is perfect for kids. Located close to Horseshoe Lake with all the amenities of home.',
      price: '$201.41',
      photo: 'https://i.imgur.com/hCA9ZwX.jpg',
      location: '2860-613',
     
      amenities: 'electricity'
    }, {
      id: 8,
      landowner_id: 6,
      description: 'non-volatile',
      price: '$159.90',
      photo: 'https://i.imgur.com/oGncYsR.jpg',
      location: '309642',
      amenities: 'restrooms'
    }, {
      id: 9,
      landowner_id: 2,
      description: 
'Our RV is a 2008 Forest River 5th wheel. It has an open floor plan perfect for medium size families or a small group of friends. The bedroom has a queen bed and tons of storage space. A full size air mattress is provided for the living room and the dinette folds down into a twin bed perfect for kiddos. The living room couch, while not the most comfortable for adults, could be used as a bed for children. The RV is blizzard proof and stays cozy warm for all those ski weekends!',
      price: '$118.96',
      photo: 'https://i.imgur.com/bMPEl58.jpg',
      location: '89094',
      amenities: 'WiFi'
    }, {
      id: 10,
      landowner_id: 12,
      description: 'Quite place in the country . Enjoy quite nights gazing at beautiful sky full of stars.',

      price: '$84.71',
      photo: 'https://i.imgur.com/jMozf8R.jpg',
      location: '89094',
      amenities: 'WiFi'
    }, {
      id: 11,
      landowner_id: 6,
      description: 'Our 34\' loaded toy hauler camper can be rented on our site, where it is set up in a nice quiet spot. 2 queen beds, and convertible seating can sleep up to 6. Has full kitchen, bath,built in icemaker. Bring your toys and relax at our site without the hassle of packing or towing.',
      price: '$190.80',
      photo: 'https://i.imgur.com/1bC79NF.jpg',
      location: '89094',
      amenities: 'showers'
    }, {
      id: 12,
      landowner_id: 17,
      description: 'Stay in our 1 year old 37ft Keystone Cougar. Parked right at the Tontitown Winery. Enjoy live music and food trucks on Friday and Saturday nights through the summer and live music only, on Wednesday night. Also free wine tasting 7 days a week.Private entrance in the back.Close to everything in Northwest Arkansas.The RV has two bedrooms with one queen bed and two smaller bunk style beds in second bedroom. Also two love seats fold out to make extra sleeping for kids.',
      price: '$275.18',
      photo: 'https://i.imgur.com/yhFYwHv.jpg',
      location: '2930',
      amenities: 'electricity'
    }, {
      id: 13,
      landowner_id: 17,
      description: 'Progressive',
      price: '$271.88',
      photo: 'https://i.imgur.com/ZwXXHZf.jpg',
      location: '357509',
      
      amenities: 'water'
    }, {
      id: 14,
      landowner_id: 13,
      description: 'bifurcated',
      price: '$54.15',
      photo: 'https://i.imgur.com/27rhlxH.jpg',
      location: '67195',
      amenities: 'WiFi'
    }, {
      id: 15,
      landowner_id: 12,
      description: 'synergy',
      price: '$274.28',
      photo: 'https://i.imgur.com/53oXIGq.jpg',
      location: '73124',
      amenities: 'showers'
    }, {
      id: 16,
      landowner_id: 2,
      description: 'system engine',
      price: '$76.66',
      photo: 'https://i.imgur.com/SOamOMF.jpg',
      location: '591 99"',
   
      amenities: 'water'
    }, {
      id: 17,
      landowner_id: 5,
      description: 'Operative',
      price: '$299.28',
      photo: 'https://i.imgur.com/z5FnKQ0.jpg',
      location: '2530-254"',
   
      amenities: 'water'
    }, {
      id: 18,
      landowner_id: 12,
      description: 'Optimized',
      price: '$46.15',
      photo: 'https://i.imgur.com/fqkyi8O.jpg',
      location: '89094',
      amenities: 'WiFi'
    }, {
      id: 19,
      landowner_id: 12,
      description: 'solution',
      price: '$106.11',
      photo: 'https://i.imgur.com/Zq6sanZ.jpg',
      location: '89094',
      amenities: 'water'
    }, {
      id: 20,
      landowner_id: 3,
      description: 'optimizing',
      price: '$69.28',
      photo: 'https://i.imgur.com/gNtMkpU.jpg',
      location: '89094',
      amenities: 'WiFi'
    }]
  )
}
