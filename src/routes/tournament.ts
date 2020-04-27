import { TournamentController } from '../controllers/tournament';
import { Application } from 'express';

export default (app: Application) => {
  app.get('/tournaments', TournamentController.list);
}