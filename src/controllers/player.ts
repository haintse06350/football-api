import { list } from '../services/player';

export class PlayerController {

  static list = async (req: any, res: any, next: any) => {
    try {
      const result = await list(req.query, req.ctx);
      res.json(result);
    } catch (e) {
      next(e);
    }
  };
}
