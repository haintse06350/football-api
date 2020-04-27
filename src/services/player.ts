import { isNaN, map, isNull } from 'lodash';
import { getModels } from '../models/db.tables';
import { MySQLClient, Op } from '../clients/mysql';
import { BadRequestError } from '../utils/errors';

const { RawPlayerHistoryPerGame, TeamsTransfermarkt } = getModels(MySQLClient);

export const list = async (params: any, ctx: any) => {
  const limit = parseInt(params.limit, 10) || 25;
  const offset = parseInt(params.offset, 10) || 0;
  const query = params.q;

  const { sortBy, direction, positions, seasonName: seasonNameStr, tournamentId, teamId, positionDetail } = params;
  let where: any = {};

  const seasonName = parseInt(seasonNameStr, 10)

  if (!seasonName || isNaN(seasonName)) {
    throw new BadRequestError({ message: 'SeasonName is mandatory', field: 'seasonName' })
  }

  where[MySQLClient.Op.and] = [{
    seasonName: {
      [MySQLClient.Op.like]: `${seasonName}%`
    },
    tournamentId: {
      [Op.notIn]: [12, 30, 683, 684, 685, 686, 123, 94]
    }
  }]

  if (tournamentId) {
    where[MySQLClient.Op.and].push({
      tournamentId: parseInt(tournamentId, 10)
    })
  }

  if (teamId) {
    where[MySQLClient.Op.and].push({
      teamId: parseInt(teamId, 10)
    })
  }

  if (query) {
    where[MySQLClient.Op.and].push({
      name: {
        [Op.like]: `%${query}%`
      }
    })
  }

  if (positions && positions.length) {
    where[MySQLClient.Op.and].push({
      [MySQLClient.Op.or]: map(positions, position => ({
        playedPositions: {
          [MySQLClient.Op.like]: `%${position}%`
        }
      }))
    })
  }

  const players = await RawPlayerHistoryPerGame.findAndCountAll({
    where,
    limit,
    raw: true,
    offset,
    order: sortBy && direction ? [[sortBy, direction]] : [['name', 'asc']],
  });

  return players;
};