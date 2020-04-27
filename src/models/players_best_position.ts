import * as sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import { PlayersBestPositionAttribute, PlayersBestPositionInstance } from './db';

export default (sequelize: sequelize.Sequelize, DataTypes: DataTypes) => {
  return sequelize.define<PlayersBestPositionInstance, PlayersBestPositionAttribute>(
    'players_best_position', {
    playerId: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
    },
    matchesPlayed: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    position: {
      type: DataTypes.STRING(255)
    }
  },
    {
      tableName: 'players_best_position'
    }
  )
}