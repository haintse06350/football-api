import * as sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import { PlayersMatchesDetailsInstance, PlayersMatchesDetailsAttribute } from './db';

export default (sequelize: sequelize.Sequelize, DataTypes: DataTypes) => {
  return sequelize.define<PlayersMatchesDetailsInstance, PlayersMatchesDetailsAttribute>(
    'players_matches_details', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    playerId: {
      type: DataTypes.BIGINT.UNSIGNED
    },
    teamId: {
      type: DataTypes.BIGINT.UNSIGNED
    },
    tournamentId: {
      type: DataTypes.BIGINT.UNSIGNED
    },
    whoscoredTournamentId: {
      type: DataTypes.BIGINT.UNSIGNED
    },
    seasonName: {
      type: DataTypes.STRING(255)
    },
    matchId: {
      type: DataTypes.BIGINT.UNSIGNED
    },
    isSubstitute: {
      type: DataTypes.BOOLEAN
    },
    isHome: {
      type: DataTypes.BOOLEAN
    },
    position: {
      type: DataTypes.STRING(255)
    },
    positionLong: {
      type: DataTypes.STRING(255)
    },
    isInjured: {
      type: DataTypes.BOOLEAN
    }
  },
    {
      tableName: 'players_matches_details'
    }
  )
}