'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage_Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stage_Events.init({
    stage_eve
    nts_id: DataTypes.INTEGER,
    state_id: DataTypes.SMALLINT,
    event_id: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'Stage_Events',
  });
  return Stage_Events;
};