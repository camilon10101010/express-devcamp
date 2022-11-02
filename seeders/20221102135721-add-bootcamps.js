'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('bootcamps',
                                    [{
                                      name: 'PHP Bootcamp',
                                      description: 'Bootcamps for PHP learning',
                                      phone: '(57)6011111',
                                      average_cost: 4500,
                                      average_rating: 3,
                                      user_id: 1
                                    },
                                    {
                                      name: 'Express Backend',
                                      description: 'Bootcamps for JavaScript learning',
                                      phone: '(57)6011111',
                                      average_cost: 4500,
                                      average_rating: 3,
                                      user_id: 2
                                    },
                                    {
                                      name: 'CSS Bootcamp',
                                      description: 'Bootcamps for CSS learning',
                                      phone: '(57)6011111',
                                      average_cost: 4500,
                                      average_rating: 3,
                                      user_id: 3
                                    }], {});
   
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('bootcamps', null, {});
  }
};
