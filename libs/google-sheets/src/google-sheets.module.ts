import { Module } from '@nestjs/common';
import { googleSheetsProviders } from './google-sheets.providers';
import { GoogleSheetsService } from './google-sheets.service';

@Module({
  providers: [...googleSheetsProviders, GoogleSheetsService],
  exports: [...googleSheetsProviders, GoogleSheetsService],
})
export class GoogleSheetsModule {}
