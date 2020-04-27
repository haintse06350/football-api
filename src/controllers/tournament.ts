import { listTournament } from '../services/tournament';

export class TournamentController {
  static list = async (req: any, res: any, next: any) => {
    try {
      const results = await listTournament(req.ctx);
      res.json(results);
    } catch (error) {
      next(error);
    }
  };
}