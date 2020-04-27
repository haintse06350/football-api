import { PlayerController } from '../controllers/player';
import { Application } from 'express';

export default (app: Application) => {
  app.get('/players', PlayerController.list);
}