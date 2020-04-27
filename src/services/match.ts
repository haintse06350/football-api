import { MySQLClient } from "../../src/clients/mysql";
import { forEach } from 'lodash';

export const getMatchesPlayed = async (params: any, ctx: any) => {
  const { teamId, seasonName } = params;
  const SQL = `SELECT * from (SELECT * FROM matches_details WHERE homeTeamId = ${teamId} AND seasonName = ${seasonName}
              UNION
              SELECT * FROM matches_details WHERE awayTeamId = ${teamId} AND seasonName = ${seasonName}) as t order by date DESC`;

  const res = await MySQLClient.query(SQL, { type: MySQLClient.QueryTypes.SELECT });
  forEach(res, match => {
    match.listGoalHome = JSON.parse(match.listGoalHome).length > 0 ? JSON.parse(match.listGoalHome) : null;
    match.listSubstituteHome = JSON.parse(match.listSubstituteHome).length > 0 ? JSON.parse(match.listSubstituteHome) : null;
    match.listSubstituteAway = JSON.parse(match.listSubstituteAway).length > 0 ? JSON.parse(match.listSubstituteAway) : null;
    match.listPlayerHome = JSON.parse(match.listPlayerHome).length > 0 ? JSON.parse(match.listPlayerHome) : null;
    match.listPlayerAway = JSON.parse(match.listPlayerAway).length > 0 ? JSON.parse(match.listPlayerAway) : null;
    match.listGoalAway = JSON.parse(match.listGoalAway).length > 0 ? JSON.parse(match.listGoalAway) : null;
  })

  return res;
}