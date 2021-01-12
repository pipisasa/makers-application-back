import { DatabaseModule, modelsProviders } from '@app/db';
import { Module } from '@nestjs/common';
import { TypingTestController } from './typing-test.controller';
import { TypingTestService } from './typing-test.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TypingTestController],
  providers: [TypingTestService, ...modelsProviders]
})
export class TypingTestModule {}
