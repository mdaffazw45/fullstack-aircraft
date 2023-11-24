'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airline extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Airline.belongsTo(models.Aircraft, {
        foreignKey: 'aircraftId',
        as: 'Aircraft' // Optional: provides an alias for the association
      });
    }
  }
  Airline.init({
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    aircraftId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Aircrafts', // This should be the table name of Aircraft
        key: 'id',
      }
    }
  }, {
    sequelize,
    modelName: 'Airline',
  });
  return Airline;
};