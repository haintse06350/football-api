import { AnalyticsController } from '../controllers/analytic';
import { Application } from 'express';

export default (app: Application) => {
    app.get('/standings', AnalyticsController.getTeamsInTournament);
}