import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {readFileSync} from 'fs';
import { join } from 'path';
import { AppModule } from './app.module';

// import * as express from 'express';

async function bootstrap() {
  // const httpsOptions = {
  //   key: readFileSync(join('key.pem')),
  //   cert: readFileSync(join('cert.pem')),
  // };

  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
    // httpsOptions,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.enableCors();

  await app.listen(80);
  console.log(`We are live on http://api.localhost`);
}
bootstrap();
