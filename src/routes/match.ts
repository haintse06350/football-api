import { MatchController } from '../controllers/match';
import { Application } from 'express';

export default (app: Application) => {
  app.get('/matches-played', MatchController.getMatchesPlayed);
}