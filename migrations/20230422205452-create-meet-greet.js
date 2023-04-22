'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meet_greets', {
      meet_greet_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      band_id: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      meet_start_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      meet_end_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      event_id: {
        type: Sequelize.SMALLINT,
        allowNull: false
      }, 
    }, {
      Sequelize,
      modelName: 'Meet_Greets',
      tableName: 'meet_greets',
      timestamps: false
    }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meet_greets');
  }
};