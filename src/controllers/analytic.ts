import { getTeamOfTournament } from '../services/analytic';

export class AnalyticsController {
  static getTeamsInTournament = async (req: any, res: any, next: any) => {
    try {
      const results = await getTeamOfTournament(req.query, req.ctx);
      res.json(results);
    } catch (error) {
      next(error);
    }
  };
}