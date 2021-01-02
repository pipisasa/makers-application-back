import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { GoogleSheetsModule } from '@app/google-sheets';
import { modelsProviders } from '@app/db/models.providers';
import { DatabaseModule } from '@app/db';

@Module({
  imports: [GoogleSheetsModule, DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...modelsProviders],
  exports: [UserService],
})
export class UserModule {}
