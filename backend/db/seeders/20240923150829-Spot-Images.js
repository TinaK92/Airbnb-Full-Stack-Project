'use strict';

const { SpotImage } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await SpotImage.bulkCreate(
      [ 
        {
          spotId: 1,
          url: '/frontend/Images/House1/house1.png',
          preview: false,
        },
        {
          spotId: 1,
          url: '/frontend/Images/House1/bedroom 4.png',
          preview: false,
        },
        {
          spotId: 1,
          url: '/frontend/Images/House1/kitchen 12.png',
          preview: true,
        },
        {
          spotId: 1,
          url: '/frontend/Images/House1/Dinning room.png',
          preview: false,
        },
        {
          spotId: 1,
          url: '/frontend/Images/House1/bathroom 2.png',
          preview: false,
        },
        {
          spotId: 2,
          url: '/frontend/Images/House2/bathroom 1.png',
          preview: false,
        },
        {
          spotId: 2,
          url: '/frontend/Images/House2/House2.jpg',
          preview: true,
        },
        {
          spotId: 2,
          url: '/frontend/Images/House2/kids room.png',
          preview: false,
        },
        {
          spotId: 2,
          url: '/frontend/Images/House2/kitchen 9.png',
          preview: false,
        },
        {
          spotId: 2,
          url: '/frontend/Images/House2/laundry.png',
          preview: false,
        },
        {
          spotId: 3,
          url: '/frontend/Images/House3/bathrooom 6.png',
          preview: false,
        },
        {
          spotId: 3,
          url: '/frontend/Images/House3/Bedroom.png',
          preview: false,
        },
        {
          spotId: 3,
          url: '/frontend/Images/House3/dinning room 5.png',
          preview: true,
        },
        {
          spotId: 3, 
          url: '/frontend/Images/House3/House3.png',
          preview: false,
        },
        {
          spotId: 3,
          url: '/frontend/Images/House3/kitchen 7.png',
          preview: false,
        },
        {
          spotId: 4,
          url: '/frontend/Images/House4/bathroom.png',
          preview: false,
        },
        {
          spotId: 4,
          url: '/frontend/Images/House4/bedroom 3.png',
          preview: false,
        },
        {
          spotId: 4,
          url: '/frontend/Images/House4/kitchen 14.png',
          preview: false,
        },
        {
          spotId: 4,
          url: '/frontend/Images/House4/livingroom 2.png',
          preview: true,
        },
        {
          spotId: 4,
          url: '/frontend/Images/House4/office.png',
          preview: false,
        },
        {
          spotId: 5,
          url: '/frontend/Images/House5/bedroom.png', 
          preview: false,
        },
        {
          spotId: 5,
          url: '/frontend/Images/House5/closet.png',
          preview: false,
        },
        {
          spotId: 5,
          url: '/frontend/Images/House5/dinning room 4.png',
          preview: false,
        },
        {
          spotId: 5,
          url: '/frontend/Images/House5/kitchen 15.png',
          preview: true,
        },
        {
          spotId: 5,
          url: '/frontend/Images/House5/livingroom6.png',
          preview: false,
        },
        {
          spotId: 6,
          url: '/frontend/Images/House6/bedroom 2.png',
          preview: false,
        },
        {
          spotId: 6,
          url: '/frontend/Images/House6/closet.png',
          preview: false,
        },
        {
          spotId: 6,
          url: '/frontend/Images/House6/kitchen 6.png',
          preview: false,
        },
        {
          spotId: 6,
          url: '/frontend/Images/House6/library.png',
          preview: true,
        },
        {
          spotId: 6,
          url: '/frontend/Images/House6/livingroom 11.png',
          preview: false,
        },
        {
          spotId: 7,
          url: '/frontend/Images/House7/bathroom.png',
          preview: false,
        },
        {
          spotId: 7,
          url: '/frontend/Images/House7/closet 2.png',
          preview: true,
        },
        {
          spotId: 7,
          url: '/frontend/Images/House7/Dinning room 1.png',
          preview: false,
        },
        {
          spotId: 7,
          url: '/frontend/Images/House7/kitchen 11.png',
          preview: false,
        },
        {
          spotId: 7,
          url: '/frontend/Images/House7/laundry.png',
          preview: false,
        },
        {
          spotId: 8,
          url: '/frontend/Images/House8/bedroom.png',
          preview: false,
        },
        {
          spotId: 8,
          url: '/frontend/Images/House8/kids room 3.png',
          preview: false,
        },
        {
          spotId: 8,
          url: '/frontend/Images/House8/kitchen-dinning 1.png',
          preview: false,
        },
        {
          spotId: 8,
          url: '/frontend/Images/House8/livingroom.png',
          preview: true,
        },
        {
          spotId: 8,
          url: '/frontend/Images/House8/office 1.png',
          preview: false,
        },
        {
          spotId: 9,
          url: '/frontend/Images/House9/bed.png',
          preview: false,
        },
        {
          spotId: 9,
          url: '/frontend/Images/House9/closet.png',
          preview: false,
        },
        {
          spotId: 9,
          url: '/frontend/Images/House9/kids room 1.png',
          preview: true, 
        },
        {
          spotId: 9,
          url: '/frontend/Images/House9/kitcehn 4.png',
          preview: false,
        },
        {
          spotId: 9,
          url: '/frontend/Images/House9/livingroom 1.png',
          preview: false,
        },
        {
          spotId: 10,
          url: '/frontend/Images/House10/bar 1.png',
          preview: false,
        },
        {
          spotId: 10,
          url: '/frontend/Images/House10/bathroom 5.png',
          preview: false,
        },
        {
          spotId: 10,
          url: '/frontend/Images/House10/game room.png',
          preview: false,
        },
        {
          spotId: 10,
          url: '/frontend/Images/House10/livingroom 3.png',
          preview: false,
        },
        {
          spotId: 10,
          url: '/frontend/Images/House10/pool.png',
          preview: true,
        },
      ],
      {validate: true}
    )
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        url: {
          [Op.in]: [
            '/frontend/Images/House1/bathroom 2.png',
            '/frontend/Images/House1/bedroom 4.png',
            '/frontend/Images/House1/Dinning room.png',
            '/frontend/Images/House1/house1.png',
            '/frontend/Images/House1/kitchen 12.png',
            '/frontend/Images/House2/bathroom 1.png',
            '/frontend/Images/House2/House2.jpg',
            '/frontend/Images/House2/kids room.png',
            '/frontend/Images/House2/kitchen 9.png',
            '/frontend/Images/House2/laundry.png',
            '/frontend/Images/House3/bathrooom 6.png',
            '/frontend/Images/House3/Bedroom.png',
            '/frontend/Images/House3/dinning room 5.png',
            '/frontend/Images/House3/House3.png',
            '/frontend/Images/House3/kitchen 7.png',
            '/frontend/Images/House4/bathroom.png',
            '/frontend/Images/House4/bedroom 3.png',
            '/frontend/Images/House4/kitchen 14.png',
            '/frontend/Images/House4/livingroom 2.png',
            '/frontend/Images/House4/office.png',
            '/frontend/Images/House5/bedroom.png',
            '/frontend/Images/House5/closet.png',
            '/frontend/Images/House5/dinning room 4.png',
            '/frontend/Images/House5/kitchen 15.png',
            '/frontend/Images/House5/livingroom6.png',
            '/frontend/Images/House6/bedroom 2.png',
            '/frontend/Images/House6/closet.png',
            '/frontend/Images/House6/kitchen 6.png',
            '/frontend/Images/House6/library.png',
            '/frontend/Images/House6/livingroom 11.png',
            '/frontend/Images/House7/bathroom.png',
            '/frontend/Images/House7/closet 2.png',
            '/frontend/Images/House7/Dinning room 1.png',
            '/frontend/Images/House7/kitchen 11.png',
            '/frontend/Images/House7/laundry.png',
            '/frontend/Images/House8/bedroom.png',
            '/frontend/Images/House8/kids room 3.png',
            '/frontend/Images/House8/kitchen-dinning 1.png',
            '/frontend/Images/House8/livingroom.png',
            '/frontend/Images/House8/office 1.png',
            '/frontend/Images/House9/bed.png',
            '/frontend/Images/House9/closet.png',
            '/frontend/Images/House9/kids room 1.png',
            '/frontend/Images/House9/kitcehn 4.png',
            '/frontend/Images/House9/livingroom 1.png',
            '/frontend/Images/House10/bar 1.png',
            '/frontend/Images/House10/bathroom 5.png',
            '/frontend/Images/House10/game room.png',
            '/frontend/Images/House10/livingroom 3.png',
            '/frontend/Images/House10/pool.png',
          ],
        },
      },
      {}
    )
  }
};
