import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import configuration from '@app/config';
import { DatabaseModule } from '@app/db';
import { GoogleSheetsModule } from '@app/google-sheets';
import { LogicTestModule } from './modules/logic-test/logic-test.module';
import { TypingTestModule } from './modules/typing-test/typing-test.module';
import { PersonalityTestModule } from './modules/personality-test/personality-test.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', '..', '..', '..', '..','public'),
    }),
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    DatabaseModule,
    UserModule,
    GoogleSheetsModule,
    LogicTestModule,
    PersonalityTestModule,
    TypingTestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
