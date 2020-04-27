import * as sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import { MatchDetailInstance, MatchDetailAttribute } from './db'

export default (sequelize: sequelize.Sequelize, DataTypes: DataTypes) => {
  return sequelize.define<MatchDetailInstance, MatchDetailAttribute>(
    'matches_details', {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      filename: {
        type: DataTypes.STRING(255),
      },
      homeTeam: {
        type: DataTypes.STRING(255),
      },
      awayTeam: {
        type: DataTypes.STRING(255),
      },
      homeTeamId: {
        type: DataTypes.BIGINT.UNSIGNED,
      },
      awayTeamId: {
        type: DataTypes.BIGINT.UNSIGNED,
      },
      homeScore: {
			  type: DataTypes.BIGINT.UNSIGNED,
      },
      awayScore: {
			  type: DataTypes.BIGINT.UNSIGNED,
      },
      date: {
        type: DataTypes.DATEONLY,
        defaultValue: null,
      },
      matchDay: {
        type: DataTypes.BIGINT.UNSIGNED,
      },
      homeStartLineUp: {
        type: DataTypes.STRING(255),
      },
      awayStartLineUp: {
        type: DataTypes.STRING(255),
      },
      homeManager: {
        type: DataTypes.STRING(255),
      },
      awayManager: {
        type: DataTypes.STRING(255),
      },
      tournamentName: {
        type: DataTypes.STRING(255),
      },
      seasonName: {
        type: DataTypes.STRING(255),
      },
      listSubstituteHome: {
        type: DataTypes.TEXT('long')
      },
      listSubstituteAway: {
        type: DataTypes.TEXT('long')
      },
      listPlayerHome: {
        type: DataTypes.TEXT('long')
      },
      listPlayerAway: {
        type: DataTypes.TEXT('long')
      },
      listGoalHome: {
        type: DataTypes.TEXT('long')
      },
      listGoalAway: DataTypes.TEXT('long')
    },
    {
      tableName: 'matches_details'
    }
  )
}