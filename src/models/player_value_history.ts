import * as sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import { PlayersValueHistoryInstance, PlayersValueHistoryAttribute } from './db'

export default (sequelize: sequelize.Sequelize, DataTypes: DataTypes) => {
  return sequelize.define<PlayersValueHistoryInstance, PlayersValueHistoryAttribute>(
    'players_value_history', {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      playerId: {
        type: DataTypes.BIGINT.UNSIGNED,
      },
      value: {
        type: DataTypes.DECIMAL(50, 2)
      },
      date: {
        type: DataTypes.DATEONLY,
        defaultValue: null,
      },
      currency: {
        type: DataTypes.STRING(255),
        defaultValue: 'EUR'
      },
      value_usd: {
        type: DataTypes.DECIMAL(50, 2)
      },
      teamName: {
        type: DataTypes.STRING(255),
      },
      teamId: {
        type: DataTypes.BIGINT.UNSIGNED,
      }
    },
    {
      tableName: 'players_value_history',
      timestamps: true,
      freezeTableName: true,
      underscored: false
    }
  )
}