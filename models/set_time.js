'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set_Time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({Band, Event, Stage}) {
      // define association here
      Set_time.belongsTo(Band, {
        foreignKEy: 'band_id',
        as: 'bands'
      })
      // event
      Set_time.belongsTo(Event, {
        foreignKey: "event_id",
        as: "events"
      })

      // stage 
      Set_time.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stage"
      })
    }
  }
  Set_Time.init({
    set_time_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    event_id: {
      type: Sequelize.SMALLINT,
      allowNull: false
    },
    stage_id: {
      type: Sequelize.SMALLINT,
      allowNull: false
    },
    band_id: {
      type: Sequelize.SMALLINT,
      allowNull: false
    },
    start_time: {
      type: Sequelize.DATE,
      allowNull: false
    },
    end_time: {
      type: Sequelize.DATE,
      allowNull: false
    },
    
  }, {
    Sequelize,
    modelName: 'Set_Time',
    tableName: 'set_time',
    timestamps: false
  }
  );
  return Set_Time;
};