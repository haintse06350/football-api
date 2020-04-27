import { getModels } from '../models/db.tables';
import { MySQLClient, Op } from '../clients/mysql';
import { map, compact, sumBy } from 'lodash';
import { BadRequestError, NotFoundError } from '../utils/errors';

const { RawPlayerHistoryPerGame, TeamMetaData, TeamsTransfermarkt } = getModels(MySQLClient);

export const getTeamOfTournament = async (params: any, ctx: any) => {
  const { seasonName, tournamentId } = params;
  let listOfTeamId: any = null;

  const teamsOfTournament = await MySQLClient.query(
    `SELECT DISTINCT teamId FROM raw_players_history_per_game WHERE tournamentId = ${tournamentId} and seasonName = ${seasonName}`,
    { type: MySQLClient.QueryTypes.SELECT }
  );

  if (teamsOfTournament.length > 0) {
    listOfTeamId = JSON.stringify(map(teamsOfTournament, 'teamId')).replace('[', '(').replace(']', ')');
  }

  if (listOfTeamId) {
    const allTeams = await MySQLClient.query(
      `SELECT * FROM teams_stats WHERE teamId IN ${listOfTeamId} AND season = ${seasonName} ORDER BY \`rank\` ASC`,
      { type: MySQLClient.QueryTypes.SELECT }
    )

    await Promise.all(map(allTeams, async team => {
      const teamTranfersmarkt = await TeamsTransfermarkt.findOne({ where: { whoscoredTeamId: team.teamId }, raw: true });
      if (teamTranfersmarkt) {
        team.teamIdTranfersmarkt = teamTranfersmarkt.transfermarktTeamId;
      }
    }))

    return { tournamentId, allTeams };
  }
  return null;
}