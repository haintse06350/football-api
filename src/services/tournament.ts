import { MySQLClient } from "../../src/clients/mysql";
import { forEach } from 'lodash';

export const listTournament = async (cts: any) => {
    const SQL = `SELECT * from tournaments_transfermarkt`;
    const res = await MySQLClient.query(SQL, { type: MySQLClient.QueryTypes.SELECT });
    return res;
}