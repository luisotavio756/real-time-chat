import express, { Application } from 'express';
import http, { Server } from 'http';
import cors from 'cors';
import routes from '@app/routes';
import { setupWebSocket } from './web-socket';
import 'dotenv/config';
import './database';

class App {
  public app: Application;

  public server: Server;

  constructor() {
    this.app = express();
    this.middlewares();

    this.server = http.createServer(this.app);

    setupWebSocket(this.server);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(routes);
  }
}

export default new App();
