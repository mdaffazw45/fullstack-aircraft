'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Aircraft', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      manufacturer: {
        type: Sequelize.STRING
      },
      introduction_year: {
        type: Sequelize.INTEGER
      },
      length: {
        type: Sequelize.FLOAT
      },
      wingspan: {
        type: Sequelize.FLOAT
      },
      height: {
        type: Sequelize.FLOAT
      },
      cruising_speed: {
        type: Sequelize.FLOAT
      },
      range: {
        type: Sequelize.FLOAT
      },
      engine_type: {
        type: Sequelize.STRING
      },
      engine_model: {
        type: Sequelize.STRING
      },
      avionics: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      cost_per_hour: {
        type: Sequelize.FLOAT
      },
      image_aircraft: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Aircraft');
  }
};