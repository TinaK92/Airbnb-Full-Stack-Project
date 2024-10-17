'use strict';

const { Spot } = require('../models');
const spot = require('../models/spot');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

const spots = [
  {
    "ownerId": 1,
    "address": "123 Coral Reef",
    "city": "Atlantis",
    "state": "Oceanic Depths",
    "country": "Atlantic Ocean",
    "lat": 31.5590,
    "lng": -23.6338,
    "name": "Poseidon's Palace",
    "description": "A grand underwater palace with coral pillars and seaweed curtains, fit for ocean royalty.",
    "price": 400,
    "avgRating": 4.9,
    "previewImage": "image_url_1"
  },
  {
    "ownerId": 2,
    "address": "456 Seahorse St.",
    "city": "Pacific Basin",
    "state": "Oceanic Depths",
    "country": "Pacific Ocean",
    "lat": -23.4581,
    "lng": -149.7766,
    "name": "Seahorse Sanctuary",
    "description": "An intimate retreat where you can swim with seahorses and relax in tranquility.",
    "price": 220,
    "avgRating": 4.7,
    "previewImage": "image_url_2"
  },
  {
    "ownerId": 3,
    "address": "789 Jellyfish Ave",
    "city": "Great Barrier",
    "state": "Coral Kingdom",
    "country": "Indian Ocean",
    "lat": -18.2871,
    "lng": 147.6992,
    "name": "Jellyfish Jungle",
    "description": "A magical home surrounded by gentle, glowing jellyfish, offering an otherworldly experience.",
    "price": 300,
    "avgRating": 4.8,
    "previewImage": "image_url_3"
  },
  {
    "ownerId": 4,
    "address": "101 Shark Bay",
    "city": "Fiji",
    "state": "Blue Depths",
    "country": "South Pacific Ocean",
    "lat": -17.7134,
    "lng": 178.0650,
    "name": "Shark's Cove",
    "description": "Stay safely in an enclosed underwater cove while observing majestic sharks in their natural habitat.",
    "price": 350,
    "avgRating": 4.6,
    "previewImage": "image_url_4"
  },
  {
    "ownerId": 5,
    "address": "202 Whale Road",
    "city": "Greenland Waters",
    "state": "Arctic Depths",
    "country": "North Atlantic Ocean",
    "lat": 72.5796,
    "lng": -38.3156,
    "name": "Whale Watch Retreat",
    "description": "A peaceful underwater house where you can watch whales swim by your window in a serene icy environment.",
    "price": 275,
    "avgRating": 4.9,
    "previewImage": "image_url_5"
  },
  {
    "ownerId": 6,
    "address": "303 Starfish Dr.",
    "city": "Maldives",
    "state": "Coral Gardens",
    "country": "Indian Ocean",
    "lat": 3.2028,
    "lng": 73.2207,
    "name": "Starfish Sanctuary",
    "description": "Immerse yourself in a colorful world of starfish and coral, perfect for an oceanic getaway.",
    "price": 250,
    "avgRating": 4.7,
    "previewImage": "image_url_6"
  },
  {
    "ownerId": 7,
    "address": "404 Octopus Way",
    "city": "Bora Bora",
    "state": "Deep Reefs",
    "country": "Pacific Ocean",
    "lat": -16.5004,
    "lng": -151.7415,
    "name": "Octopus Hideaway",
    "description": "Live among the intelligent octopus in this cozy and fascinating underwater sanctuary.",
    "price": 290,
    "avgRating": 4.5,
    "previewImage": "image_url_7"
  },
  {
    "ownerId": 8,
    "address": "505 Manta Ray Blvd",
    "city": "Caribbean Sea",
    "state": "Oceanic Paradise",
    "country": "Caribbean",
    "lat": 15.8997,
    "lng": -77.9164,
    "name": "Manta Ray Manor",
    "description": "Glide through clear waters alongside graceful manta rays in this luxurious underwater home.",
    "price": 500,
    "avgRating": 5.0,
    "previewImage": "image_url_8"
  },
  {
    "ownerId": 9,
    "address": "606 Dolphin Ln.",
    "city": "Bahamas",
    "state": "Crystal Waters",
    "country": "North Atlantic Ocean",
    "lat": 25.0343,
    "lng": -77.3963,
    "name": "Dolphin Dive",
    "description": "Dive into the world of playful dolphins at this vibrant underwater home.",
    "price": 320,
    "avgRating": 4.8,
    "previewImage": "image_url_9"
  },
  {
    "ownerId": 10,
    "address": "707 Kraken Ct.",
    "city": "Mediterranean",
    "state": "Sunken Depths",
    "country": "Mediterranean Sea",
    "lat": 35.2033,
    "lng": 18.3949,
    "name": "Kraken's Lair",
    "description": "An adventurous home for those brave enough to stay near the legendary Kraken’s domain.",
    "price": 450,
    "avgRating": 4.7,
    "previewImage": "image_url_10"
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    console.log("Seeding Spots...");
    await Spot.bulkCreate(spots, { validate: true });
    console.log("Finished Seeding Spots");

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = "Spots";
    const Op = Sequelize.Op;
    const addresses = spots.map((spot) => spot.address);
    await queryInterface.bulkDelete(options, {
      name: {
        [Op.in]: addresses,
      },
    });
  }
};

