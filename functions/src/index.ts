import * as functions from 'firebase-functions';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as express from 'express';
import { firebaseProvider}  from './domain/providers/firebase-provider';

const server = express();

firebaseProvider.initializeApp();

const createNestServer = async (expressInstance: any) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance)
  );
  // app.use(helmet());
  app.enableCors({
    origin: '*'
  });
  return app.init();
}

createNestServer(server)
  .then(v => console.log('Nest Ready'))
  .catch(err => console.error('Nest broken', err))


export const api = functions.https.onRequest(server);
