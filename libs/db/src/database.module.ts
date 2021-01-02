import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { modelsProviders } from './models.providers';

@Module({
  providers: [...databaseProviders, ...modelsProviders],
  exports: [...databaseProviders, ...modelsProviders],
})
export class DatabaseModule {}
