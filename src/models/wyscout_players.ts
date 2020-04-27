import * as sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import { WyscoutPlayersInstance, WyscoutPlayersAttribute } from './db'

export default (sequelize: sequelize.Sequelize, DataTypes: DataTypes) => {
  return sequelize.define<WyscoutPlayersInstance, WyscoutPlayersAttribute>(
    'wyscout_players', {
      id: {
          type: DataTypes.BIGINT.UNSIGNED,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
      },
      playerId: {
        type: DataTypes.BIGINT.UNSIGNED,
      },
      competitionId: {
        type: DataTypes.BIGINT.UNSIGNED,
      },
      seasonId: {
        type: DataTypes.BIGINT.UNSIGNED,
      },
      position: {
        type: DataTypes.STRING(255),
      },
      firstName: {
        type: DataTypes.STRING(255),
      },
      lastName: {
        type: DataTypes.STRING(255),
      },
      currentTeamId: {
        type: DataTypes.BIGINT.UNSIGNED,
      },
      matches: {
        type: DataTypes.DECIMAL(50, 10),
      },
      matchesInStart: {
        type: DataTypes.DECIMAL(50, 10),
      },
      matchesSubstituted: {
        type: DataTypes.DECIMAL(50, 10),
      },
      matchesComingOff: {
        type: DataTypes.DECIMAL(50, 10),
      },
      minutesOnField: {
        type: DataTypes.DECIMAL(50, 10),
      },
      minutesTagged: {
        type: DataTypes.DECIMAL(50, 10),
      },
      goals: {
        type: DataTypes.DECIMAL(50, 10),
      },
      assists: {
        type: DataTypes.DECIMAL(50, 10),
      },
      shots: {
        type: DataTypes.DECIMAL(50, 10),
      },
      headShots: {
        type: DataTypes.DECIMAL(50, 10),
      },
      yellowCards: {
        type: DataTypes.DECIMAL(50, 10),
      },
      redCards: {
        type: DataTypes.DECIMAL(50, 10),
      },
      directRedCards: {
        type: DataTypes.DECIMAL(50, 10),
      },
      penalties: {
        type: DataTypes.DECIMAL(50, 10),
      },
      linkupPlays: {
        type: DataTypes.DECIMAL(50, 10),
      },
      duels: {
        type: DataTypes.DECIMAL(50, 10),
      },
      duelsWon: {
        type: DataTypes.DECIMAL(50, 10),
      },
      defensiveDuels: {
        type: DataTypes.DECIMAL(50, 10),
      },
      defensiveDuelsWon: {
        type: DataTypes.DECIMAL(50, 10),
      },
      offensiveDuels: {
        type: DataTypes.DECIMAL(50, 10),
      },
      offensiveDuelsWon: {
        type: DataTypes.DECIMAL(50, 10),
      },
      aerialDuels: {
        type: DataTypes.DECIMAL(50, 10),
      },
      aerialDuelsWon: {
        type: DataTypes.DECIMAL(50, 10),
      },
      fouls: {
        type: DataTypes.DECIMAL(50, 10),
      },
      passes: {
        type: DataTypes.DECIMAL(50, 10),
      },
      successfulPasses: {
        type: DataTypes.DECIMAL(50, 10),
      },
      smartPasses: {
        type: DataTypes.DECIMAL(50, 10),
      },
      successfulSmartPasses: {
        type: DataTypes.DECIMAL(50, 10),
      },
      passesToFinalThird: {
        type: DataTypes.DECIMAL(50, 10),
      },
      successfulPassesToFinalThird: {
        type: DataTypes.DECIMAL(50, 10),
      },
      crosses: {
        type: DataTypes.DECIMAL(50, 10),
      },
      successfulCrosses: {
        type: DataTypes.DECIMAL(50, 10),
      },
      forwardPasses: {
        type: DataTypes.DECIMAL(50, 10),
      },
      successfulForwardPasses: {
        type: DataTypes.DECIMAL(50, 10),
      },
      backPasses: {
        type: DataTypes.DECIMAL(50, 10),
      },
      successfulBackPasses: {
        type: DataTypes.DECIMAL(50, 10),
      },
      throughPasses: {
        type: DataTypes.DECIMAL(50, 10),
      },
      successfulThroughPasses: {
        type: DataTypes.DECIMAL(50, 10),
      },
      keyPasses: {
        type: DataTypes.DECIMAL(50, 10),
      },
      successfulKeyPasses: {
        type: DataTypes.DECIMAL(50, 10),
      },
      verticalPasses: {
        type: DataTypes.DECIMAL(50, 10),
      },
      successfulVerticalPasses: {
        type: DataTypes.DECIMAL(50, 10),
      },
      longPasses: {
        type: DataTypes.DECIMAL(50, 10),
      },
      successfulLongPasses: {
        type: DataTypes.DECIMAL(50, 10),
      },
      dribbles: {
        type: DataTypes.DECIMAL(50, 10),
      },
      successfulDribbles: {
        type: DataTypes.DECIMAL(50, 10),
      },
      interceptions: {
        type: DataTypes.DECIMAL(50, 10),
      },
      defensiveActions: {
        type: DataTypes.DECIMAL(50, 10),
      },
      successfulDefensiveAction: {
        type: DataTypes.DECIMAL(50, 10),
      },
      attackingActions: {
        type: DataTypes.DECIMAL(50, 10),
      },
      successfulAttackingActions: {
        type: DataTypes.DECIMAL(50, 10),
      },
      freeKicks: {
        type: DataTypes.DECIMAL(50, 10),
      },
      freeKicksOnTarget: {
        type: DataTypes.DECIMAL(50, 10),
      },
      directFreeKicks: {
        type: DataTypes.DECIMAL(50, 10),
      },
      directFreeKicksOnTarget: {
        type: DataTypes.DECIMAL(50, 10),
      },
      corners: {
        type: DataTypes.DECIMAL(50, 10),
      },
      successfulPenalties: {
        type: DataTypes.DECIMAL(50, 10),
      },
      successfulLinkupPlays: {
        type: DataTypes.DECIMAL(50, 10),
      },
      accelerations: {
        type: DataTypes.DECIMAL(50, 10),
      },
      pressingDuels: {
        type: DataTypes.DECIMAL(50, 10),
      },
      pressingDuelsWon: {
        type: DataTypes.DECIMAL(50, 10),
      },
      looseBallDuels: {
        type: DataTypes.DECIMAL(50, 10),
      },
      looseBallDuelsWon: {
        type: DataTypes.DECIMAL(50, 10),
      },
      missedBalls: {
        type: DataTypes.DECIMAL(50, 10),
      },
      shotAssists: {
        type: DataTypes.DECIMAL(50, 10),
      },
      shotOnTargetAssists: {
        type: DataTypes.DECIMAL(50, 10),
      },
      recoveries: {
        type: DataTypes.DECIMAL(50, 10),
      },
      opponentHalfRecoveries: {
        type: DataTypes.DECIMAL(50, 10),
      },
      dangerousOpponentHalfRecoveries: {
        type: DataTypes.DECIMAL(50, 10),
      },
      losses: {
        type: DataTypes.DECIMAL(50, 10),
      },
      ownHalfLosses: {
        type: DataTypes.DECIMAL(50, 10),
      },
      dangerousOwnHalfLosses: {
        type: DataTypes.DECIMAL(50, 10),
      },
      xgShot: {
        type: DataTypes.DECIMAL(50, 10),
      },
      xgAssist: {
        type: DataTypes.DECIMAL(50, 10),
      },
      xgSave: {
        type: DataTypes.DECIMAL(50, 10),
      },
      receivedPass: {
        type: DataTypes.DECIMAL(50, 10),
      },
      touchInBox: {
        type: DataTypes.DECIMAL(50, 10),
      },
      progressiveRun: {
        type: DataTypes.DECIMAL(50, 10),
      },
      fieldAerialDuels: {
        type: DataTypes.DECIMAL(50, 10),
      },
      fieldAerialDuelsWon: {
        type: DataTypes.DECIMAL(50, 10),
      },
      gkCleanSheets: {
        type: DataTypes.DECIMAL(50, 10),
      },
      gkConcededGoals: {
        type: DataTypes.DECIMAL(50, 10),
      },
      gkShotsAgainst: {
        type: DataTypes.DECIMAL(50, 10),
      },
      gkExits: {
        type: DataTypes.DECIMAL(50, 10),
      },
      gkSuccessfulExits: {
        type: DataTypes.DECIMAL(50, 10),
      },
      gkAerialDuels: {
        type: DataTypes.DECIMAL(50, 10),
      },
      gkAerialDuelsWon: {
        type: DataTypes.DECIMAL(50, 10),
      },
      gkSaves: {
        type: DataTypes.DECIMAL(50, 10),
      },
      newDuelsWon: {
        type: DataTypes.DECIMAL(50, 10),
      },
      newDefensiveDuelsWon: {
        type: DataTypes.DECIMAL(50, 10),
      },
      newOffensiveDuelsWon: {
        type: DataTypes.DECIMAL(50, 10),
      },
      newSuccessfulDribbles: {
        type: DataTypes.DECIMAL(50, 10),
      },
      lateralPasses: {
        type: DataTypes.DECIMAL(50, 10),
      },
      successfulLateralPasses: {
        type: DataTypes.DECIMAL(50, 10),
      }
    },
    {
      tableName: 'wyscout_players'
    }
  )
}