import express, { Application } from 'express'
import { connect } from './infra/database';

class App {
  public app: Application;
  constructor(){
    this.app = express();
    this.middlewarezsInitialize();
    this.initializeRoutes();
    this.interceptionError();
    connect();
  }

  initializeRoutes(){
    //this.app.use('/', );
  }

  interceptionError(){
    //this.app.use()
  }

  middlewarezsInitialize(){
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true})); //text-Hello%2@World
  }

  listen(){
    this.app.listen(3333, () => console.log('Server is running'))
  }
}

export { App };