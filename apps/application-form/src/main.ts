import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
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
