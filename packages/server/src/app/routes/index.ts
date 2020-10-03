import { Router } from 'express';

class Routes {
  private routes: Router;

  constructor() {
    this.routes = Router();
    this.matchRoutes();
  }

  matchRoutes() {
    this.routes.use('/', (request, response) => {
      return response.json('Olá mundo!');
    });
  }
}

export default new Routes();
