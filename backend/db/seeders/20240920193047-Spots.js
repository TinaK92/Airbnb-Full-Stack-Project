"use strict";

const { Spot } = require("../models");
const spot = require("../models/spot");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Spot.bulkCreate(
      [
        {
          ownerId: 1,
          address: "123 Coral Reef",
          city: "Atlantis",
          state: "Oceanic Depths",
          country: "Atlantic Ocean",
          lat: 31.559,
          lng: -23.6338,
          name: "Poseidon's Palace",
          description:
            "A grand underwater palace with coral pillars and seaweed curtains, fit for ocean royalty.",
          price: 400,
          avgRating: 4.9,
          previewImage: "frontend/Images/House1/kitchen 12.png",
        },
        {
          ownerId: 2,
          address: "456 Seahorse St.",
          city: "Pacific Basin",
          state: "Oceanic Depths",
          country: "Pacific Ocean",
          lat: -23.4581,
          lng: -149.7766,
          name: "Seahorse Sanctuary",
          description:
            "An intimate retreat where you can swim with seahorses and relax in tranquility.",
          price: 220,
          avgRating: 4.7,
          previewImage: "frontend/Images/House2/House2.jpg",
        },
        {
          ownerId: 3,
          address: "789 Jellyfish Ave",
          city: "Great Barrier",
          state: "Coral Kingdom",
          country: "Indian Ocean",
          lat: -18.2871,
          lng: 147.6992,
          name: "Jellyfish Jungle",
          description:
            "A magical home surrounded by gentle, glowing jellyfish, offering an otherworldly experience.",
          price: 300,
          avgRating: 4.8,
          previewImage: "frontend/Images/House3/dinning room 5.png'",
        },
        {
          ownerId: 1,
          address: "101 Shark Bay",
          city: "Fiji",
          state: "Blue Depths",
          country: "South Pacific Ocean",
          lat: -17.7134,
          lng: 178.065,
          name: "Shark's Cove",
          description:
            "Stay safely in an enclosed underwater cove while observing majestic sharks in their natural habitat.",
          price: 350,
          avgRating: 4.6,
          previewImage: "frontend/Images/House4/livingroom 2.png",
        },
        {
          ownerId: 2,
          address: "202 Whale Road",
          city: "Greenland Waters",
          state: "Arctic Depths",
          country: "North Atlantic Ocean",
          lat: 72.5796,
          lng: -38.3156,
          name: "Whale Watch Retreat",
          description:
            "A peaceful underwater house where you can watch whales swim by your window in a serene icy environment.",
          price: 275,
          avgRating: 4.9,
          previewImage: "frontend/Images/House5/kitchen 15.png",
        },
        {
          ownerId: 3,
          address: "303 Starfish Dr.",
          city: "Maldives",
          state: "Coral Gardens",
          country: "Indian Ocean",
          lat: 3.2028,
          lng: 73.2207,
          name: "Starfish Sanctuary",
          description:
            "Immerse yourself in a colorful world of starfish and coral, perfect for an oceanic getaway.",
          price: 250,
          avgRating: 4.7,
          previewImage: "frontend/Images/House6/library.png",
        },
        {
          ownerId: 1,
          address: "404 Octopus Way",
          city: "Bora Bora",
          state: "Deep Reefs",
          country: "Pacific Ocean",
          lat: -16.5004,
          lng: -151.7415,
          name: "Octopus Hideaway",
          description:
            "Live among the intelligent octopus in this cozy and fascinating underwater sanctuary.",
          price: 290,
          avgRating: 4.5,
          previewImage: "frontend/Images/House7/closet 2.png",
        },
        {
          ownerId: 2,
          address: "505 Manta Ray Blvd",
          city: "Caribbean Sea",
          state: "Oceanic Paradise",
          country: "Caribbean",
          lat: 15.8997,
          lng: -77.9164,
          name: "Manta Ray Manor",
          description:
            "Glide through clear waters alongside graceful manta rays in this luxurious underwater home.",
          price: 500,
          avgRating: 5.0,
          previewImage: "frontend/Images/House8/livingroom.png",
        },
        {
          ownerId: 3,
          address: "606 Dolphin Ln.",
          city: "Bahamas",
          state: "Crystal Waters",
          country: "North Atlantic Ocean",
          lat: 25.0343,
          lng: -77.3963,
          name: "Dolphin Dive",
          description:
            "Dive into the world of playful dolphins at this vibrant underwater home.",
          price: 320,
          avgRating: 4.8,
          previewImage: "frontend/Images/House9/kids room 1.png",
        },
        {
          ownerId: 1,
          address: "707 Kraken Ct.",
          city: "Mediterranean",
          state: "Sunken Depths",
          country: "Mediterranean Sea",
          lat: 35.2033,
          lng: 18.3949,
          name: "Kraken's Lair",
          description:
            "An adventurous home for those brave enough to stay near the legendary Kraken’s domain.",
          price: 450,
          avgRating: 4.7,
          previewImage: "frontend/Images/House10/pool.png",
        },
      ],
      { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Spots";
    const Op = Sequelize.Op;
    await Spot.bulkDelete(options, {
      name: { [Op.in]: [
        "Poseidon's Palace", 
        "Seahorse Sanctuary", 
        "Jellyfish Jungle", 
        "Shark's Cove",
        "Whale Watch Retreat",
        "Starfish Sanctuary",
        "Octopus Hideaway",
        "Manta Ray Manor",
        "Dolphin Dive",
        "Kraken's Lair",
      ] },
    });
  },
};