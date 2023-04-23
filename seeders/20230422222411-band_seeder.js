'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('bands', [{
    name: 'U2',
    genre: 'rock',
    available_start_time: new Date(),
    end_time: new Date()
  }]);
},
  async up (queryInterface, Sequelize) {  
    return queryInterface.bulkInsert('events', [{
      name: 'U2',
      date: 'January 1st, 2023',
      start_time: new Date(),
      end_time: new Date()
    

  async down (queryInterface, Sequelize) {
  
};
