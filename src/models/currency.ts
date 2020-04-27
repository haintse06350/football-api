import * as sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import { CurrencyInstance, CurrencyAttribute } from './db';

export default (sequelize: sequelize.Sequelize, DataTypes: DataTypes) => {
  return sequelize.define<CurrencyInstance, CurrencyAttribute>(
    'currency', {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATEONLY,
        defaultValue: null,
      },
      payload: {
        type: DataTypes.TEXT
      }
    },
    {
      tableName: 'currency',
      timestamps: false
    }
  )
}