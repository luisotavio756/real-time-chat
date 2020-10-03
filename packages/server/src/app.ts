import express, { Application } from 'express';
import http, { Server } from 'http';
import { setupWebSocket } from './web-socket';
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
    this.app.use(express.json());
  }
}

export default new App();
