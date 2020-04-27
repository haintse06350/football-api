import * as sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import { AgencyInstance, AgencyAttribute } from './db';

export default (sequelize: sequelize.Sequelize, DataTypes: DataTypes) => {
  return sequelize.define<AgencyInstance, AgencyAttribute>(
    'agency', {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255)
      },
      listPlayer: {
        type: DataTypes.TEXT('long')
      }
    },
    {
      tableName: 'agency'
    }
  )
}