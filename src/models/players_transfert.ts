import * as sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import { PlayersTransfertInstance, PlayersTransfertAttribute } from './db';

export default (sequelize: sequelize.Sequelize, DataTypes: DataTypes) => {
  return sequelize.define<PlayersTransfertInstance, PlayersTransfertAttribute>(
    'players_transfert', {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255)
      },
      playerId: {
        type: DataTypes.BIGINT.UNSIGNED,
      },
      nationality: {
        type: DataTypes.STRING(255)
      },
      birthday: {
        type: DataTypes.DATEONLY,
      },
      height: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
      image: {
        type: DataTypes.STRING(255)
      },
      transfers: {
        type: DataTypes.TEXT('long')
      },
      listTrophy: {
        type: DataTypes.TEXT('long')
      }
    },
    {
      tableName: 'players_transfert'
    }
  )
}