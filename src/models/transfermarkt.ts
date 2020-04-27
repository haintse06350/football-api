import * as sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import { TransfermarktInstance, TransfermarktAttribute } from './db'

export default (sequelize: sequelize.Sequelize, DataTypes: DataTypes) => {
  return sequelize.define<TransfermarktInstance, TransfermarktAttribute>(
    'players_transfermarkt', {
      playerId: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
      name: {
        type: DataTypes.STRING(255)
      },
      url: {
        type: DataTypes.STRING(255)
      },
      age: {
        type: DataTypes.STRING(255)
      },
      nationality: {
        type: DataTypes.STRING(255)
      },
      position: {
        type: DataTypes.STRING(255)
      },
      teamName: {
        type: DataTypes.STRING(255)
      },
      value: {
        type: DataTypes.STRING(255)
      },
      values: {
        type: DataTypes.TEXT('long')
      },
      height: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
      listTrophy: {
        type: DataTypes.TEXT('long')
      },
      endDateContract: {
        type: DataTypes.DATEONLY
      }
    },
    {
      tableName: 'players_transfermarkt',
      indexes: [
        {
          unique: true,
          fields: ['playerId']
        }
      ]
    }
  )
}