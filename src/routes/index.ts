import AuthRoutes from "./auth";
import PlayerRoutes from './player';
import AnalyticRoutes from './analytic';
import MatchRoutes from './match';
import TournamentRoutes from './tournament';
import { Application } from "express";

export default (app: Application) => {
  AuthRoutes(app);
  PlayerRoutes(app);
  AnalyticRoutes(app);
  MatchRoutes(app);
  TournamentRoutes(app);
};
