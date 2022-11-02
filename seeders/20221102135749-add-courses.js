'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    
    await queryInterface.bulkInsert('courses', 
                                    [
                                      {
                                        title:'Java',
                                        description: 'Java for PHP learning',
                                        weeks: 3,
                                        enroll_cost: 4500,
                                        minimum_skill:'Biginer',
                                        bootcamp_id: 1
                                      },
                                      {
                                        title:'Php',
                                        description: 'Php for PHP learning',
                                        weeks: 4,
                                        enroll_cost: 4500,
                                        minimum_skill:'Biginer',
                                        bootcamp_id: 2
                                      },
                                      {
                                        title:'MYSQL',
                                        description: 'MYSQL for PHP learning',
                                        weeks: 5,
                                        enroll_cost: 4500,
                                        minimum_skill:'Biginer',
                                        bootcamp_id: 3
                                      }
                                    ], {});
                                      
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('courses', null, {});
     
  }
};