import * as sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import { PlayersAgentsInstance, PlayersAgentsAttribute } from './db';

export default (sequelize: sequelize.Sequelize, DataTypes: DataTypes) => {
  return sequelize.define<PlayersAgentsInstance, PlayersAgentsAttribute>(
    'players_agents', {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      playerId: {
        type: DataTypes.BIGINT.UNSIGNED,
      },
      agentId: {
        type: DataTypes.BIGINT.UNSIGNED,
      },
    },
    {
      tableName: 'players_agents'
    }
  )
}