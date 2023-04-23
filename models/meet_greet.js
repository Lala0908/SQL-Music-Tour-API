'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meet_Greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ Band, Event}) {
      // define association here
      Meet_Greet.belongsTo(Band,{
        foreignKey: 'band_id',
        as: 'bands'
      })

      Meet_Greet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "events"
      })
      }
    }
  
  Meet_Greet.init({
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

  });
  return Meet_Greet;
};