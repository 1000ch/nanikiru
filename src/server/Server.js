import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

export default class Server {
  constructor() {
    this.server = express();
    this.server.use(cookieParser());
    this.server.use(bodyParser.urlencoded({ extended : true }));
    this.server.use(bodyParser.json());
  }

  addStatic(path, to) {
    this.server.use(path, express.static(to));
  }

  addMiddleware(...args) {
    this.server.use(...args);
  }

  listen(port) {
    this.server.listen(port);
  }
}
