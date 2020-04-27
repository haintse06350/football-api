import * as sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import { PlayersTransfertsHistoryInstance, PlayersTransfertsHistoryAttribute } from './db'

export default (sequelize: sequelize.Sequelize, DataTypes: DataTypes) => {
  return sequelize.define<PlayersTransfertsHistoryInstance, PlayersTransfertsHistoryAttribute>(
    'players_transferts_history', {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      playerId: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
      playerName: {
        type: DataTypes.STRING(255)
      },
      season: {
        type: DataTypes.STRING(255)
      },
      date: {
        type: DataTypes.DATEONLY,
      },
      marketValue: {
        type: DataTypes.STRING(255)
      },
      fee: {
        type: DataTypes.STRING(255)
      },
      marketValueUsd: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
      feeUsd: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
      left: {
        type: DataTypes.STRING(255)
      },
      join: {
        type: DataTypes.STRING(255)
      }
    },
    {
      tableName: 'players_transferts_history',
    }
  )
}