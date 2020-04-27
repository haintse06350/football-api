import * as sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import { ManagerInstance, ManagerAttribute } from './db';

export default (sequelize: sequelize.Sequelize, DataTypes: DataTypes) => {
  return sequelize.define<ManagerInstance, ManagerAttribute>(
    'manager', {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      managerId: {
        type: DataTypes.BIGINT.UNSIGNED,
      },
      name: {
        type: DataTypes.STRING(255)
      },
      image: {
        type: DataTypes.STRING(255)
      },
      birthday: {
        type: DataTypes.DATEONLY,
      },
      nationality: {
        type: DataTypes.STRING(255)
      },
      isRetired: {
        type: DataTypes.BOOLEAN
      },
      startContract: {
        type: DataTypes.DATEONLY,
      },
      endContract: {
        type: DataTypes.DATEONLY,
      },
      listClubs: {
        type: DataTypes.TEXT('long')
      }
    },
    {
      tableName: 'manager'
    }
  )
}