import * as sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import { TeamsStatsInstance, TeamsStatsAttribute } from './db';

export default (sequelize: sequelize.Sequelize, DataTypes: DataTypes) => {
  return sequelize.define<TeamsStatsInstance, TeamsStatsAttribute>(
    'teams_stats', {
    season: {
      type: DataTypes.INTEGER
    },
    seasonId: {
      type: DataTypes.INTEGER
    },
    teamId: {
      type: DataTypes.INTEGER
    },
    teamName: {
      type: DataTypes.STRING(255)
    },
    rank: {
      type: DataTypes.INTEGER
    },
    gamePlayed: {
      type: DataTypes.INTEGER
    },
    win: {
      type: DataTypes.INTEGER
    },
    draw: {
      type: DataTypes.INTEGER
    },
    loss: {
      type: DataTypes.INTEGER
    },
    goalFor: {
      type: DataTypes.INTEGER
    },
    goalAgainst: {
      type: DataTypes.INTEGER
    },
    goalDifference: {
      type: DataTypes.INTEGER
    },
    points: {
      type: DataTypes.INTEGER
    }
  },
    {
      tableName: 'teams_stats',
    }
  )
}