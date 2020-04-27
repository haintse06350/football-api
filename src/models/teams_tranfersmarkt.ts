import * as sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import { TeamsTransfermarktInstance, TeamsTransfermarktAttribute } from './db'

export default (sequelize: sequelize.Sequelize, DataTypes: DataTypes) => {
  return sequelize.define<TeamsTransfermarktInstance, TeamsTransfermarktAttribute>(
    'teams_transfermarkt', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255)
    },
    whoscoredTeamId: {
      type: DataTypes.BIGINT.UNSIGNED
    },
    transfermarktTeamId: {
      type: DataTypes.BIGINT.UNSIGNED
    },
    listTrophy: {
      type: DataTypes.TEXT
    }
  },
    {
      tableName: 'teams_transfermarkt'
    }
  )
}