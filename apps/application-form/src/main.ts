import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import fs from 'fs';
import { AppModule } from './app.module';

// import * as express from 'express';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./secrets/private-key.pem'),
    cert: fs.readFileSync('./secrets/public-certificate.pem'),
  };

  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
    httpsOptions,
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
