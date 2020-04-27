import { getMatchesPlayed } from '../services/match';

export class MatchController {
  static getMatchesPlayed = async (req: any, res: any, next: any) => {
    try {
      const results = await getMatchesPlayed(req.query, req.ctx);
      res.json(results);
    } catch (error) {
      next(error);
    }
  };
}