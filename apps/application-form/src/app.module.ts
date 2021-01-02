import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import configuration from '@app/config';
import { DatabaseModule } from '@app/db';
import { GoogleSheetsModule } from '@app/google-sheets';

@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'public'),
    // }),
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    DatabaseModule,
    UserModule,
    GoogleSheetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
