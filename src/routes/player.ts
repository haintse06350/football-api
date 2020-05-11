import { PlayerController } from '../controllers/player';
import { Application } from 'express';

export default (app: Application) => {
  app.get('/players', PlayerController.list);
  app.get('/search', PlayerController.search);
  app.get('/autocomplete', PlayerController.autoComplete);
}