import * as sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import { RawPlayerHistoryPerGameInstance, RawPlayerHistoryPerGameAttribute } from './db';

export default (sequelize: sequelize.Sequelize, DataTypes: DataTypes) => {
  return sequelize.define<RawPlayerHistoryPerGameInstance, RawPlayerHistoryPerGameAttribute>(
    'raw_players_history', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nbMatches: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    seasonId: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    seasonName: {
      type: DataTypes.STRING(255),
    },
    tournamentId: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    tournamentRegionId: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    tournamentRegionCode: {
      type: DataTypes.STRING(255),
    },
    tournamentRegionName: {
      type: DataTypes.STRING(255),
    },
    regionCode: {
      type: DataTypes.STRING(255),
    },
    tournamentName: {
      type: DataTypes.STRING(255),
    },
    tournamentShortName: {
      type: DataTypes.STRING(255),
    },
    firstName: {
      type: DataTypes.STRING(255),
    },
    lastName: {
      type: DataTypes.STRING(255),
    },
    playerId: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    teamId: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    teamName: {
      type: DataTypes.STRING(255),
    },
    playedPositions: {
      type: DataTypes.STRING(255),
    },
    age: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    height: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    weight: {
      type: DataTypes.DECIMAL(50, 10),
    },
    apps: {
      type: DataTypes.DECIMAL(50, 10),
    },
    minsPlayed: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    duelAerialLost: {
      type: DataTypes.DECIMAL(50, 10),
    },
    duelAerialTotal: {
      type: DataTypes.DECIMAL(50, 10),
    },
    name: {
      type: DataTypes.STRING(255),
    },
    duelAerialWon: {
      type: DataTypes.DECIMAL(50, 10),
    },
    offsideWonPerGame: {
      type: DataTypes.DECIMAL(50, 10),
    },
    passCrossBlockedDefensive: {
      type: DataTypes.DECIMAL(50, 10),
    },
    outfielderBlockedPass: {
      type: DataTypes.DECIMAL(50, 10),
    },
    outfielderBlock: {
      type: DataTypes.DECIMAL(50, 10),
    },
    yellowCard: {
      type: DataTypes.DECIMAL(50, 10),
    },
    redCard: {
      type: DataTypes.DECIMAL(50, 10),
    },
    clearanceTotal: {
      type: DataTypes.DECIMAL(50, 10),
    },
    dribbleLost: {
      type: DataTypes.DECIMAL(50, 10),
    },
    dribbleTotal: {
      type: DataTypes.DECIMAL(50, 10),
    },
    dribbleWon: {
      type: DataTypes.DECIMAL(50, 10),
    },
    foulGiven: {
      type: DataTypes.DECIMAL(50, 10),
    },
    foulCommitted: {
      type: DataTypes.DECIMAL(50, 10),
    },
    goalTotal: {
      type: DataTypes.DECIMAL(50, 10),
    },
    goalSixYardBox: {
      type: DataTypes.DECIMAL(50, 10)
    },
    goalPenaltyArea: {
      type: DataTypes.DECIMAL(50, 10)
    },
    goalObox: {
      type: DataTypes.DECIMAL(50, 10)
    },
    goalOpenPlay: {
      type: DataTypes.DECIMAL(50, 10)
    },
    goalCounter: {
      type: DataTypes.DECIMAL(50, 10)
    },
    goalSetPiece: {
      type: DataTypes.DECIMAL(50, 10)
    },
    goalLeftFoot: {
      type: DataTypes.DECIMAL(50, 10)
    },
    goalRightFoot: {
      type: DataTypes.DECIMAL(50, 10)
    },
    penaltyScored: {
      type: DataTypes.DECIMAL(50, 10)
    },
    penaltyTaken: {
      type: DataTypes.DECIMAL(50, 10)
    },
    interceptionAll: {
      type: DataTypes.DECIMAL(50, 10),
    },
    keyPassesTotal: {
      type: DataTypes.DECIMAL(50, 10),
    },
    keyPassCross: {
      type: DataTypes.DECIMAL(50, 10),
    },
    keyPassCorner: {
      type: DataTypes.DECIMAL(50, 10),
    },
    keyPassThroughball: {
      type: DataTypes.DECIMAL(50, 10),
    },
    keyPassFreekick: {
      type: DataTypes.DECIMAL(50, 10),
    },
    keyPassThrowin: {
      type: DataTypes.DECIMAL(50, 10),
    },
    keyPassOther: {
      type: DataTypes.DECIMAL(50, 10),
    },
    offsideGiven: {
      type: DataTypes.DECIMAL(50, 10),
    },
    passTotal: {
      type: DataTypes.DECIMAL(50, 10),
    },
    passLongBallAccurate: {
      type: DataTypes.DECIMAL(50, 10),
    },
    passLongBallInaccurate: {
      type: DataTypes.DECIMAL(50, 10),
    },
    shortPassAccurate: {
      type: DataTypes.DECIMAL(50, 10),
    },
    shortPassInaccurate: {
      type: DataTypes.DECIMAL(50, 10),
    },
    shotPenaltyArea: {
      type: DataTypes.DECIMAL(50, 10),
    },
    shotOpenPlay: {
      type: DataTypes.DECIMAL(50, 10),
    },
    shotSixYardBox: {
      type: DataTypes.DECIMAL(50, 10),
    },
    shotOboxTotal: {
      type: DataTypes.DECIMAL(50, 10),
    },
    shotCounter: {
      type: DataTypes.DECIMAL(50, 10),
    },
    shotRightFoot: {
      type: DataTypes.DECIMAL(50, 10),
    },
    shotLeftFoot: {
      type: DataTypes.DECIMAL(50, 10),
    },
    shotHead: {
      type: DataTypes.DECIMAL(50, 10),
    },
    shotObp: {
      type: DataTypes.DECIMAL(50, 10),
    },
    passCornerAccurate: {
      type: DataTypes.DECIMAL(50, 10),
    },
    passCornerInaccurate: {
      type: DataTypes.DECIMAL(50, 10),
    },
    passFreekickAccurate: {
      type: DataTypes.DECIMAL(50, 10),
    },
    passFreekickInaccurate: {
      type: DataTypes.DECIMAL(50, 10),
    },
    passCrossInaccurate: {
      type: DataTypes.DECIMAL(50, 10),
    },
    passCrossAccurate: {
      type: DataTypes.DECIMAL(50, 10),
    },
    turnover: {
      type: DataTypes.DECIMAL(50, 10),
    },
    dispossessed: {
      type: DataTypes.DECIMAL(50, 10),
    },
    saveSixYardBox: {
      type: DataTypes.DECIMAL(50, 10),
    },
    savePenaltyArea: {
      type: DataTypes.DECIMAL(50, 10),
    },
    saveObox: {
      type: DataTypes.DECIMAL(50, 10),
    },
    saveTotal: {
      type: DataTypes.DECIMAL(50, 10),
    },
    shotOnTarget: {
      type: DataTypes.DECIMAL(50, 10),
    },
    shotOffTarget: {
      type: DataTypes.DECIMAL(50, 10),
    },
    shotOnPost: {
      type: DataTypes.DECIMAL(50, 10),
    },
    shotBlocked: {
      type: DataTypes.DECIMAL(50, 10),
    },
    shotsTotal: {
      type: DataTypes.DECIMAL(50, 10),
    },
    tackleWonTotal: {
      type: DataTypes.DECIMAL(50, 10),
    },
    tackleTotalAttempted: {
      type: DataTypes.DECIMAL(50, 10),
    },
    challengeLost: {
      type: DataTypes.DECIMAL(50, 10),
    },
    assistTotal: {
      type: DataTypes.DECIMAL(50, 10),
    },
    assistCross: {
      type: DataTypes.DECIMAL(50, 10),
    },
    assistCorner: {
      type: DataTypes.DECIMAL(50, 10),
    },
    assistThroughball: {
      type: DataTypes.DECIMAL(50, 10),
    },
    assistFreekick: {
      type: DataTypes.DECIMAL(50, 10),
    },
    assistThrowin: {
      type: DataTypes.DECIMAL(50, 10),
    },
    assistOther: {
      type: DataTypes.DECIMAL(50, 10),
    },
    assist: {
      type: DataTypes.DECIMAL(50, 10),
    },
    isManOfTheMatch: {
      type: DataTypes.DECIMAL(50, 10),
    },
    subOn: {
      type: DataTypes.DECIMAL(50, 10),
    },
    manOfTheMatch: {
      type: DataTypes.DECIMAL(50, 10),
    },
    isOpta: {
      type: DataTypes.DECIMAL(50, 10),
    },
    keyPassPerGame: {
      type: DataTypes.DECIMAL(50, 10),
    },
    passSuccess: {
      type: DataTypes.DECIMAL(50, 10),
    },
    dribbleWonPerGame: {
      type: DataTypes.DECIMAL(50, 10),
    },
    foulGivenPerGame: {
      type: DataTypes.DECIMAL(50, 10),
    },
    offsideGivenPerGame: {
      type: DataTypes.DECIMAL(50, 10),
    },
    dispossessedPerGame: {
      type: DataTypes.DECIMAL(50, 10),
    },
    turnoverPerGame: {
      type: DataTypes.DECIMAL(50, 10),
    },
    tacklePerGame: {
      type: DataTypes.DECIMAL(50, 10),
    },
    interceptionPerGame: {
      type: DataTypes.DECIMAL(50, 10),
    },
    foulsPerGame: {
      type: DataTypes.DECIMAL(50, 10),
    },
    clearancePerGame: {
      type: DataTypes.DECIMAL(50, 10),
    },
    wasDribbledPerGame: {
      type: DataTypes.DECIMAL(50, 10),
    },
    outfielderBlockPerGame: {
      type: DataTypes.DECIMAL(50, 10),
    },
    goalOwn: {
      type: DataTypes.DECIMAL(50, 10),
    },
    totalPassesPerGame: {
      type: DataTypes.DECIMAL(50, 10),
    },
    accurateThroughBallPerGame: {
      type: DataTypes.DECIMAL(50, 10),
    },
    accurateCrossesPerGame: {
      type: DataTypes.DECIMAL(50, 10),
    },
    accurateLongPassPerGame: {
      type: DataTypes.DECIMAL(50, 10),
    },
    stageId: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    transfermarktId: {
      type: DataTypes.INTEGER.UNSIGNED,
    }
  },
    {
      tableName: 'raw_players_history',
      indexes: [
        {
          unique: true,
          fields: ['playerId', 'seasonId']
        },
        {
          fields: ['seasonId']
        }
      ]
    }
  );
};