// aircraft.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Aircraft extends Model {
    static associate(models) {
      // define association here
      Aircraft.hasMany(models.Airline, {
        foreignKey: 'aircraftId',
        as: 'Airlines' // Optional: provides an alias for the association
      });
    }
  }
  Aircraft.init({
    type: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    introduction_year: DataTypes.INTEGER,
    length: DataTypes.STRING,
    wingspan: DataTypes.STRING,
    height: DataTypes.STRING,
    cruising_speed: DataTypes.STRING,
    range: DataTypes.STRING,
    engine_type: DataTypes.STRING,
    engine_model: DataTypes.STRING,
    avionics: DataTypes.STRING,
    price: DataTypes.STRING,
    cost_per_hour: DataTypes.STRING,
    image_aircraft: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Aircraft',
  });
  return Aircraft;
};
