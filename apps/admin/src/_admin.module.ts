import { Module } from '@nestjs/common';

import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

import { GoogleSheetsModule } from '@app/google-sheets';
import { DatabaseModule } from '@app/db';

@Module({
  controllers: [AdminController],
  providers: [
    AdminService,
  ],
  imports: [
    GoogleSheetsModule,
    DatabaseModule,
  ],
  exports: [
    AdminService
  ]
})
export class AdminModuleForService {}
