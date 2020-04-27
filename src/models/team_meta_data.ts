import * as sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import { TeamMetaDataAttribute, TeamMetaDataInstance } from './db';

export default (sequelize: sequelize.Sequelize, DataTypes: DataTypes) => {
  return sequelize.define<TeamMetaDataInstance, TeamMetaDataAttribute>(
    'team_meta_data', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    teamId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    presidentName: {
      type: DataTypes.STRING(255)
    },
    coachName: {
      type: DataTypes.STRING(255)
    },
    foundationDate: {
      type: DataTypes.DATEONLY
    },
    teamLogo: {
      type: DataTypes.STRING(255)
    },
    listTrophy: {
      type: DataTypes.TEXT
    }
  },
    {
      tableName: 'team_meta_data'
    }
  )
}