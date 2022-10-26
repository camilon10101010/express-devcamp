'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users',[{
      username: 'Camilo',
      email: 'jcibaez9@misena.edu.co',
      password: '123456'
    },
    {
      username: 'Carlos',
      email: 'carlos@misena.edu.co',
      password: '123456'
    },
    {
      username: 'Jorge',
      email: 'jorge@misena.edu.co',
      password: '123456'
    }],{})
  
  },

  async down (queryInterface, Sequelize) {
    
    
    await queryInterface.bulkDelete('users', null, {});
     
  }
};
